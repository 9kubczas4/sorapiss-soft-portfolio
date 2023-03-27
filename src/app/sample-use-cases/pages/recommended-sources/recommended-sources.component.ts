import { Component } from '@angular/core';

@Component({
  selector: 'ssp-recommended-sources',
  templateUrl: './recommended-sources.component.html',
})
export class RecommendedSourcesComponent {
  readmeImport = import('raw-loader!./readme.md');
}
