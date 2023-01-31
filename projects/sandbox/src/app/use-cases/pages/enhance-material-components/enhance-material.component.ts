import { Component, OnInit, ViewChild } from '@angular/core';
import { of, merge } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { GithubIssue } from './interfaces/github-issues';
import { GithubIssuesService } from './services/github-issues.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-enhance-material',
  templateUrl: './enhance-material.component.html',
  styleUrls: ['./enhance-material.component.scss'],
})
export class EnhanceMaterialComponent implements OnInit {
  readmeImport = import('./readme.md');
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) private paginator!: MatPaginator;
  @ViewChild(MatSort) private sort!: MatSort;

  constructor(private service: GithubIssuesService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort?.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.service
            .getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex)
            .pipe(catchError(() => of(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data.total_count;
          return data.items;
        }),
      )
      .subscribe(data => (this.data = data));
  }
}
