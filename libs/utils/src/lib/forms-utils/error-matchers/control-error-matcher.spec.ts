import { NgForm } from '@angular/forms';
import { ControlErrorStateMatcher } from './control-error-matcher';

describe('ControlErrorMatcher', () => {
  let controlErrorStateMatcher: ControlErrorStateMatcher;

  beforeEach(() => {
    controlErrorStateMatcher = new ControlErrorStateMatcher();
  });

  it('should return false when control doesnt exist', () => {
    const formControl = null;
    const formGroup = new NgForm([], []);

    const result = controlErrorStateMatcher.isErrorState(formControl, formGroup);

    expect(result).toBe(false);
  });
});
