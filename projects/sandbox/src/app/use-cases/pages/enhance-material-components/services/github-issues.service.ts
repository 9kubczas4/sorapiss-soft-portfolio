import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { ApiGithubIssueResponse } from '../interfaces/github-issues';

@Injectable()
export class GithubIssuesService {
  constructor(private client: HttpClient) {}

  getRepoIssues(sort: string, order: SortDirection, page: number): Observable<ApiGithubIssueResponse> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

    return this.client.get<ApiGithubIssueResponse>(requestUrl);
  }
}
