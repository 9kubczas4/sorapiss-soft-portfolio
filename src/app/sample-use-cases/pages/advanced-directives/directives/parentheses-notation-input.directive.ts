/* eslint-disable no-useless-escape */
import { Directive, HostListener, Optional, Self, OnInit } from '@angular/core';
import { FormControlDirective } from '@angular/forms';

@Directive({
  selector: '[sspParenthesesNotationInput]',
  standalone: true
})
export class ParenthesesNotationInputDirective implements OnInit {
  private readonly parenthesesNotationFormat = /^(\()?\-?\d+(\.\d+)?(\))?/g;

  constructor(@Self() @Optional() private readonly formControl: FormControlDirective) { }

  ngOnInit(): void {
    if (!this.formControl) {
      throw new Error(`Parentheses Notation Input Directive is working only with reactive forms.`)
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '-', '.'];
    const arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

    if (!allowedKeys.includes(key) && !arrowKeys.includes(key) && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const pastedValue = event.clipboardData?.getData('text/plain') ?? '';

    if (!this.parenthesesNotationFormat.test(pastedValue)) {
      event.preventDefault();
    }
  }
}
