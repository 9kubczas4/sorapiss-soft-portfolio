
import { Directive, HostListener, Optional, Self, OnInit } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { isNumber, parenthesesNotationValidatorFn, PARENTHESES_NOTATION_FORMAT } from '@sorapiss-soft-portfolio/utils';
import { debounceTime, tap } from 'rxjs';

@Directive({
  selector: '[sspParenthesesNotationInput]',
  standalone: true
})
export class ParenthesesNotationInputDirective implements OnInit {
  constructor(@Self() @Optional() private readonly formControl: FormControlDirective) { }

  ngOnInit(): void {
    if (!this.formControl) {
      throw new Error(`Parentheses Notation Input Directive is working only with reactive forms.`)
    }

    this.formControl.control.addValidators(parenthesesNotationValidatorFn);
    this.formControl.control.valueChanges
      .pipe(
        debounceTime(100),
        tap(value => {
          if (this.isValidFormat(value) && !isNumber(value)) {
            const valueWithoutBrackets = Number(value.replace('(', '').replace(')', '')) * -1;

            this.formControl.control.setValue(valueWithoutBrackets, {
              emitModelToViewChange: false
            });
          }
      }))
      .subscribe()
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '-', '.'];
    const functionalKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace'];

    if (!allowedKeys.includes(key) && !functionalKeys.includes(key) && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const pastedValue = event.clipboardData?.getData('text/plain') ?? '';

    if (!this.isValidFormat(pastedValue)) {
      event.preventDefault();
    }
  }

  private isValidFormat = (value: string) => PARENTHESES_NOTATION_FORMAT.test(value);
}
