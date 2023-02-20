import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ssp-sample-context-menu',
  templateUrl: './sample-context-menu.component.html',
  styleUrls: ['./sample-context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleContextMenuComponent {
  readmeImport = import('raw-loader!./readme.md');
  sampleData = { id: 1 };

  displayAlert(sampleDataId: number, text: string): void {
    alert(`Called ${text} with ${sampleDataId}`);
  }
}
