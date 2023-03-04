import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Observable, BehaviorSubject, tap, combineLatest, map } from 'rxjs';
import {
  ApiGithubIssueResponse,
  GetRepoIssuesMetadata,
} from '../interfaces/github-issues';

@Injectable()
export class GithubIssuesService {
  private readonly isLoading$$ = new BehaviorSubject<boolean>(false);
  private readonly isRateLimitReached$$ = new BehaviorSubject<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  getRepoIssuesMetadata$: Observable<GetRepoIssuesMetadata> = combineLatest(
    this.isLoading$$,
    this.isRateLimitReached$$
  ).pipe(
    map(([isLoading, isRateLimitReached]) => ({
      isLoading,
      isRateLimitReached,
    }))
  );

  constructor(private readonly client: HttpClient) {}

  getRepoIssues(
    sort: string,
    order: SortDirection,
    page: number
  ): Observable<ApiGithubIssueResponse> {
    this.setMetadata(true, false);

    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${
      page + 1
    }`;

    return this.client
      .get<ApiGithubIssueResponse>(requestUrl)
      .pipe(tap((data) => this.setMetadata(false, data === null)));
  }

  private setMetadata(isLoading: boolean, isRateLimitReached: boolean): void {
    this.isLoading$$.next(isLoading);
    this.isRateLimitReached$$.next(isRateLimitReached);
  }
}
