import { Component } from '@angular/core';

@Component({
  selector: 'app-enhance-material',
  templateUrl: './enhance-material.component.html',
  styleUrls: ['./enhance-material.component.scss'],
})
export class EnhanceMaterialComponent {
  readmeImport = import('./readme.md');
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  isLoadingResults = true;
  isRateLimitReached = false;
}
