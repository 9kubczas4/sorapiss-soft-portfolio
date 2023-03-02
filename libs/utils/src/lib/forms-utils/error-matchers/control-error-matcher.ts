import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class ControlErrorStateMatcher implements ErrorStateMatcher {
  public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    if (control) {
      const isFormSubmitted = (form && form.submitted) ?? false;
      const isControlInvalid = control && control.invalid;
      const wasControlTouchedOrDirty = control.dirty || control.touched;
      return isControlInvalid && (wasControlTouchedOrDirty || isFormSubmitted);
    }

    return false;
  }
}
