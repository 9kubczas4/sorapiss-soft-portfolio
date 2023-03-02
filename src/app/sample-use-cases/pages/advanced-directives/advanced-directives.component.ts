import { Component } from '@angular/core';

@Component({
  selector: 'ssp-advanced-directives',
  templateUrl: './advanced-directives.component.html',
  styleUrls: ['./advanced-directives.component.scss'],
})
export class AdvancedDirectivesComponent {
  readmeImport = import('raw-loader!./readme.md');
  displayedColumns = ['firstName', 'lastName', 'role'];
}
