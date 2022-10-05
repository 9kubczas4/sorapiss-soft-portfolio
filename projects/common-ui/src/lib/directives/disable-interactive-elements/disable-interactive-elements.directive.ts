import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[libDisableInteractiveElements]',
})
export class DisableInteractiveElementsDirective implements OnChanges {
  @Input() disable = false;
  @Input() elementTypes = `input,select,button`;

  constructor(private readonly element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('disable' in changes || 'elementTypes' in changes) {
      const elements = this.#getElements();
      this.#doReadOnly(elements);
    }
  }

  #getElements() {
    const elements = this.element.nativeElement.querySelectorAll(this.elementTypes);
    return elements;
  }

  #doReadOnly(elements: HTMLInputElement[]) {
    elements.forEach(element => {
      element.disabled = this.disable;
    });
  }
}
