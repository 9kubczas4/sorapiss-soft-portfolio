import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ssp-change-detection-demo',
  templateUrl: './change-detection-demo.component.html',
  styleUrls: ['./change-detection-demo.component.scss'],
})
export class ChangeDetectionDemoComponent implements OnInit {
  readmeImport = import('raw-loader!./readme.md');

  ngOnInit(): void {
    console.log(`test`);
  }
}
