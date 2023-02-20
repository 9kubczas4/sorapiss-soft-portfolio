import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ssp-sample-disable-interactive-elements-directive',
  templateUrl: './sample-disable-interactive-elements-directive.component.html',
  styleUrls: ['./sample-disable-interactive-elements-directive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleDisableInteractiveElementsDirectiveComponent {
  readmeImport = import('raw-loader!./readme.md');
  disabled = false;

  toggleChange(): void {
    this.disabled = !this.disabled;
  }
}
