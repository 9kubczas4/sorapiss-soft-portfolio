import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { InjectionToken } from '@angular/core';

export interface FormStrategy {
  get form(): Observable<FormGroup | undefined>;

  init(): void;
  submit(): Observable<void>;
}

export const FORM = new InjectionToken('CONTACT_DETAILS_FORM');
