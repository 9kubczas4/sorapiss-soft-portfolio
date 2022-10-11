import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sample-disable-interactive-elements-directive',
  templateUrl: './sample-disable-interactive-elements-directive.component.html',
  styleUrls: ['./sample-disable-interactive-elements-directive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleDisableInteractiveElementsDirectiveComponent implements OnInit {
  readmeImport = import('./readme.md');
  disabled = false;

  ngOnInit(): void {}

  toggleChange(): void {
    this.disabled = !this.disabled;
  }
}
