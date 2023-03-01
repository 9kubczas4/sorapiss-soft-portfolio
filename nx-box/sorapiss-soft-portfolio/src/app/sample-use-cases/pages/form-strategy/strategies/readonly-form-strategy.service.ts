import { Injectable, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { ContactDetailsFormService } from './contact-details-form.service';
import { FormStrategy } from './form-strategy';

@Injectable()
export class ContactDetailsPreviewFormService implements FormStrategy {
  private readonly contactDetailsFormService = inject(ContactDetailsFormService);
  private readonly formGroup$$ = new Subject<FormGroup<any>>();

  private formGroup?: FormGroup<any>;

  get form(): Observable<FormGroup<any> | undefined> {
    return this.formGroup$$.asObservable();
  }

  init(): void {
    this.formGroup = this.contactDetailsFormService.formGroup;
    this.formGroup.disable();
  };

  submit(): Observable<void> {
    console.log(`submit: ${this.form}`);
    return of();
  }
}

