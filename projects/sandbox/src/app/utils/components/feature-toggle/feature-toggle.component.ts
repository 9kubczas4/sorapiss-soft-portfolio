import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-toggle',
  templateUrl: './feature-toggle.component.html',
  styleUrls: ['./feature-toggle.component.scss'],
})
export class FeatureToggleComponent implements OnInit {
  readmeImport = import('./readme.md');

  constructor() {}

  ngOnInit(): void {}
}
