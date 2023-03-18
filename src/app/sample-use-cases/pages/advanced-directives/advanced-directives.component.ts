import { map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { isNumber } from '@sorapiss-soft-portfolio/utils';

@Component({
  selector: 'ssp-advanced-directives',
  templateUrl: './advanced-directives.component.html',
  styleUrls: ['./advanced-directives.component.scss'],
})
export class AdvancedDirectivesComponent {
  readmeImport = import('raw-loader!./readme.md');

  formControl = new FormControl('10');

  formControlValue$ = this.formControl.valueChanges.pipe(startWith(this.formControl.value));
  isFormControlValid$ = this.formControlValue$.pipe(
    map(_ => this.formControl.valid)
  );

  double(): void {
    this.formControl.patchValue((isNumber(this.formControl.value) ? Number(this.formControl.value) * 2 : 0).toString());
  }
}
