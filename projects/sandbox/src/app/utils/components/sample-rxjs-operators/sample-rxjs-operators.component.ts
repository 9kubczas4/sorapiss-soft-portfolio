import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-rxjs-operators',
  templateUrl: './sample-rxjs-operators.component.html',
  styleUrls: ['./sample-rxjs-operators.component.scss'],
})
export class SampleRxjsOperatorsComponent {
  readmeImport = import('./readme.md');
}
