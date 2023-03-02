import { Component } from '@angular/core';

@Component({
  selector: 'ssp-sample-rxjs-operators',
  templateUrl: './sample-rxjs-operators.component.html',
  styleUrls: ['./sample-rxjs-operators.component.scss'],
})
export class SampleRxjsOperatorsComponent {
  readmeImport = import('raw-loader!./readme.md');
}
