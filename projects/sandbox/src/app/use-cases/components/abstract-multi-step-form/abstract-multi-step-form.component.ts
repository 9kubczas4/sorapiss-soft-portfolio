import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkPasswords, strengthPassword, FormProvider } from '@ng-utils';

@Component({
  selector: 'app-abstract-multi-step-form',
  templateUrl: './abstract-multi-step-form.component.html',
  styleUrls: ['./abstract-multi-step-form.component.scss'],
  providers: [{ provide: FormProvider, useExisting: AbstractMultiStepFormComponent }],
})
export class AbstractMultiStepFormComponent extends FormProvider implements OnInit {
  registrationForm?: FormGroup;
  readmeImport = import('./readme.md');

  constructor(private readonly formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.#initForm();
  }

  getForm(): FormGroup | null {
    return this.registrationForm ?? null;
  }

  #initForm(): void {
    this.registrationForm = this.formBuilder.group({
      contact: this.formBuilder.group({
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
      }),
      account: this.formBuilder.group({
        email: this.formBuilder.control('', [Validators.required, Validators.email]),
        password: this.formBuilder.group(
          {
            password: this.formBuilder.control('', [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(20),
              strengthPassword,
            ]),
            confirmPassword: this.formBuilder.control('', [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(20),
            ]),
          },
          { validators: [checkPasswords] },
        ),
      }),
    });
  }
}
