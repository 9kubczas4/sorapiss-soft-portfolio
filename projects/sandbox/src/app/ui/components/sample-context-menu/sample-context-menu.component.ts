import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-context-menu',
  templateUrl: './sample-context-menu.component.html',
  styleUrls: ['./sample-context-menu.component.scss'],
})
export class SampleContextMenuComponent implements OnInit {
  readmeImport = import('./readme.md');

  constructor() {}

  ngOnInit(): void {}
}
