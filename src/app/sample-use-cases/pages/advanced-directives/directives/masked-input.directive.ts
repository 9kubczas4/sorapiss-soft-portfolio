import { Directive, HostListener, Optional, Self } from '@angular/core';
import { FormControlDirective } from '@angular/forms';

@Directive({
  selector: '[sspMaskedInput]',
  standalone: true
})
export class MaskedInputDirective {
  constructor(@Self() @Optional() private readonly maskedFormInput: FormControlDirective) { }

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const regex = /[0-9]/g;

    if (!regex.exec(value)) {
      this.maskedFormInput.valueAccessor?.writeValue(value);
    } else {
      if (value === "-10") {
        this.maskedFormInput.control.setValue(value, { emitModelToViewChange: false});
      } else {
        this.maskedFormInput.control.setValue(`(${value})`, { emitModelToViewChange: true});
      }
    }

    console.log(event);
  }
}
