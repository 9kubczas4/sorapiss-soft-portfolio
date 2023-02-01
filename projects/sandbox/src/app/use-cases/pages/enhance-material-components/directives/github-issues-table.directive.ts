import { GithubIssuesService } from './../services/github-issues.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Directive, Optional, Self, AfterViewInit, Input } from '@angular/core';
import { ApiGithubIssueResponse, GithubIssue } from '../interfaces/github-issues';
import { MatSort } from '@angular/material/sort';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { merge, of, Observable } from 'rxjs';

@Directive({
  selector: '[githubIssuesTable]',
  standalone: true,
})
export class GithubIssuesTableDirective implements AfterViewInit {
  @Input() paginator!: MatPaginator;

  constructor(
    @Optional() @Self() private readonly table: MatTable<GithubIssue>,
    @Optional() @Self() private readonly sort: MatSort,
    private readonly service: GithubIssuesService,
  ) {}

  ngAfterViewInit(): void {
    if (!this.table) {
      throw new Error(`githubIssuesTable has to be attached to mat-table element`);
    }
    console.log(this.paginator);

    // If the user changes the sort order, reset back to the first page.
    this.sort?.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    const dataSource: Observable<GithubIssue[]> = merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith([]),
      // eslint-disable-next-line arrow-body-style
      switchMap(() => {
        // this.isLoadingResults = true;
        return this.service
          .getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex)
          .pipe(catchError(() => of(null)));
      }),
      map((data: ApiGithubIssueResponse | null) => {
        // Flip flag to show that loading has finished.
        // this.isLoadingResults = false;
        // this.isRateLimitReached = data === null;

        if (data === null) {
          return [];
        }

        // Only refresh the result length if there is new data. In case of rate
        // limit errors, we do not want to reset the paginator to zero, as that
        // would prevent users from re-triggering requests.
        // this.resultsLength = data.total_count;
        this.paginator.length = data?.total_count ?? 0;
        return data?.items;
      }),
    );

    this.table.dataSource = dataSource;
  }
}
