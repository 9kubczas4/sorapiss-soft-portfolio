import { GithubIssuesService } from './../services/github-issues.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Directive, Self, Input, inject, OnInit } from '@angular/core';
import {
  ApiGithubIssueResponse,
  GithubIssue,
} from '../interfaces/github-issues';
import { MatSort } from '@angular/material/sort';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { merge, of, Observable, takeUntil } from 'rxjs';
import { DestroyedDirective } from '@sorapiss-soft-portfolio/utils';

@Directive({
  selector: '[sspGithubIssuesTable]',
  standalone: true,
  hostDirectives: [DestroyedDirective],
})
export class GithubIssuesTableDirective implements OnInit {
  @Input() paginator!: MatPaginator;

  @Self() private readonly table = inject(MatTable<GithubIssue>);
  @Self() private readonly sort = inject(MatSort);
  private readonly service = inject(GithubIssuesService);
  private readonly destroyed$ = inject(DestroyedDirective).destroyed$;

  ngOnInit(): void {
    this.sort?.sortChange
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => (this.paginator.pageIndex = 0));

    const dataSource: Observable<GithubIssue[]> = merge(
      this.sort.sortChange,
      this.paginator.page
    ).pipe(
      startWith([]),
      switchMap(() =>
        this.service
          .getRepoIssues(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex
          )
          .pipe(catchError(() => of(null)))
      ),
      map((data: ApiGithubIssueResponse | null) => {
        this.paginator.length = data?.total_count ?? 0;
        return data === null ? [] : data?.items;
      }),
      takeUntil(this.destroyed$)
    );

    this.table.dataSource = dataSource;
  }
}
