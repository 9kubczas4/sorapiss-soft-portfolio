import { Component, Input } from '@angular/core';
import { ReadmeComponent } from '../readme';

@Component({
  selector: 'ssp-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss'],
  imports: [ReadmeComponent],
  standalone: true,
})
export class SamplePageComponent {
  @Input() readmeImport?: Promise<any>;
}
