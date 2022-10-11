import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-directives',
  templateUrl: './advanced-directives.component.html',
  styleUrls: ['./advanced-directives.component.scss'],
})
export class AdvancedDirectivesComponent implements OnInit {
  readmeImport = import('./readme.md');

  constructor() {}

  ngOnInit(): void {}
}
