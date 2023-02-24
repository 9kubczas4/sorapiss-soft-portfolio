import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlErrorStateMatcher, FormProvider } from '@sorapiss-soft-portfolio/utils';

@Component({
  selector: 'ssp-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  form: FormGroup | null = null;
  matcher = new ControlErrorStateMatcher();

  constructor(private readonly formProvider: FormProvider, private readonly router: Router) {}

  get firstNameFormControl(): FormControl {
    return this.form?.get('firstName') as FormControl;
  }

  get lastNameFormControl(): FormControl {
    return this.form?.get('lastName') as FormControl;
  }

  ngOnInit(): void {
    this.form = this.formProvider.getForm()?.get('contact') as FormGroup;
  }

  next(): void {
    if (this.form?.valid) {
      this.router.navigateByUrl('use-cases/abstract-multi-step-form/account');
    }
  }
}
