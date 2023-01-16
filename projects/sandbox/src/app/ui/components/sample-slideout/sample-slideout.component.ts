import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-slideout',
  templateUrl: './sample-slideout.component.html',
  styleUrls: ['./sample-slideout.component.scss'],
})
export class SampleSlideoutComponent implements OnInit {
  readmeImport = import('./readme.md');
  sampleData = { id: 1 };

  constructor() {}

  ngOnInit(): void {}
}
