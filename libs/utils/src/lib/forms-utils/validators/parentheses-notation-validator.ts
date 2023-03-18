import { isNumber } from './../../type-guards/isNumber';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PARENTHESES_NOTATION_FORMAT } from '../../consts';

export const parenthesesNotationValidatorFn: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const value: string = control.value;

  if (!value) {
    return null;
  }

  const result = PARENTHESES_NOTATION_FORMAT.test(value) || isNumber(value)
    ? null
    : { invalid: true };

  return result;
};
