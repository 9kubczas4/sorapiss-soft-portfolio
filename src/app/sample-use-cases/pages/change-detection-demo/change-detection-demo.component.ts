import { Component } from '@angular/core';

@Component({
  selector: 'ssp-change-detection-demo',
  templateUrl: './change-detection-demo.component.html',
  styleUrls: [
    './change-detection-demo.component.scss',
    './shared/styles.scss'
  ],
})
export class ChangeDetectionDemoComponent {
  readmeImport = import('raw-loader!./readme.md');
}
