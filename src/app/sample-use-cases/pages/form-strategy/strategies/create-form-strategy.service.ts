import { Injectable, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ContactDetailsFormService } from './contact-details-form.service';
import { FormStrategy } from './form-strategy';

@Injectable()
export class ContactDetailsCreateFormService implements FormStrategy {
  private readonly contactDetailsFormService = inject(ContactDetailsFormService);
  private formGroup?: FormGroup<any>;

  get form(): Observable<FormGroup<any> | undefined> {
    return of(this.formGroup);
  }

  init(): void {
    this.formGroup = this.contactDetailsFormService.formGroup;
  };

  submit(): Observable<void> {
    console.log(`submit: ${this.form}`);
    return of();
  }
}
