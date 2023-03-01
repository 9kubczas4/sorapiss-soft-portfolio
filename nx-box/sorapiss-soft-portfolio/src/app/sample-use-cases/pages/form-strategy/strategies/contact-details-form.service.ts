import { inject, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class ContactDetailsFormService {
  private readonly formBuilder = inject(FormBuilder);

  readonly formGroup: FormGroup = this.formBuilder.group({
    firstName: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    lastName: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
  });
}
