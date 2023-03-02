import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const strengthPassword = (control: AbstractControl): ValidationErrors | null => {
  const hasNumber = /\d/.test(control.value);
  const hasUpper = /[A-Z]/.test(control.value);
  const hasLower = /[a-z]/.test(control.value);
  const hasMinCharacters = control.value.length >= 8;
  const valid = hasNumber && hasUpper && hasLower && hasMinCharacters;
  if (!valid) {
    return { strong: true };
  }
  return null;
};

export const checkPasswords: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const pass = control.get('password')?.value;
  const confirmPass = control.get('confirmPassword')?.value;
  return pass === confirmPass || !pass || !confirmPass ? null : { differentPasswords: true };
};
