import { map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

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
}
