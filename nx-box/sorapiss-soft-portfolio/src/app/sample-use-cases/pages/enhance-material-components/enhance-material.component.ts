import { Component } from '@angular/core';
import { GithubIssuesService } from './services/github-issues.service';

@Component({
  selector: 'ssp-enhance-material',
  templateUrl: './enhance-material.component.html',
  styleUrls: ['./enhance-material.component.scss'],
})
export class EnhanceMaterialComponent {
  readmeImport = import('raw-loader!./readme.md');
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  getRepoIssuesMetadata$ = this.githubIssuesService.getRepoIssuesMetadata$;

  constructor(private readonly githubIssuesService: GithubIssuesService) {}
}
