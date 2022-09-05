import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss'],
})
export class SamplePageComponent {
  @Input() readmeImport?: Promise<any>;
}
