import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-disable-interactive-elements-directive',
  templateUrl: './sample-disable-interactive-elements-directive.component.html',
  styleUrls: ['./sample-disable-interactive-elements-directive.component.scss'],
})
export class SampleDisableInteractiveElementsDirectiveComponent implements OnInit {
  readmeImport = import('./readme.md');
  constructor() {}

  ngOnInit(): void {}
}
