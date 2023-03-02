import { Component } from '@angular/core';

@Component({
  selector: 'ssp-abstract-multi-step-form',
  templateUrl: './form-strategy.component.html',
  styleUrls: ['./form-strategy.component.scss'],
})
export class FormStrategyComponent {
  readmeImport = import('raw-loader!./readme.md');
}
