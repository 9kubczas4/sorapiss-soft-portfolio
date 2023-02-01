import { Component } from '@angular/core';
import { GithubIssuesService } from './services/github-issues.service';

@Component({
  selector: 'app-enhance-material',
  templateUrl: './enhance-material.component.html',
  styleUrls: ['./enhance-material.component.scss'],
})
export class EnhanceMaterialComponent {
  readmeImport = import('./readme.md');
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];

  constructor(readonly githubIssuesService: GithubIssuesService) {}
}
