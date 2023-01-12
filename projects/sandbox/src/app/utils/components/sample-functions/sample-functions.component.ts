import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-functions',
  templateUrl: './sample-functions.component.html',
  styleUrls: ['./sample-functions.component.scss'],
})
export class SampleFunctionsComponent {
  readmeImport = import('./readme.md');
}
