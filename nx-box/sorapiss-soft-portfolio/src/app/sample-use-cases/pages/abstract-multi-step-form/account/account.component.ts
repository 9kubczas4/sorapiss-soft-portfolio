import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ControlErrorStateMatcher, FormProvider } from '@sorapiss-soft-portfolio/utils';

@Component({
  selector: 'ssp-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  form: FormGroup | null = null;
  matcher = new ControlErrorStateMatcher();

  constructor(private readonly formProvider: FormProvider, private readonly location: Location) {}

  get emailFormControl(): FormControl {
    return this.form?.get('email') as FormControl;
  }

  get passwordFormControl(): FormControl {
    return this.passwordFormGroup.get('password') as FormControl;
  }

  get confirmPasswordFormControl(): FormControl {
    return this.passwordFormGroup.get('confirmPassword') as FormControl;
  }

  get passwordFormGroup(): FormGroup {
    return this.form?.get('password') as FormGroup;
  }

  ngOnInit(): void {
    this.form = this.formProvider?.getForm()?.get('account') as FormGroup;
  }

  onSubmit(): void {
    console.log('Submit:');
    console.log(JSON.stringify(this.formProvider.getForm()?.value));
  }

  previous(): void {
    this.location.back();
  }
}
