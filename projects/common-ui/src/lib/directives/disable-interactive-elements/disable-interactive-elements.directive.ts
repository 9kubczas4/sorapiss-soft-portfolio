import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

type InteractiveElement = HTMLInputElement | HTMLSelectElement | HTMLButtonElement;

@Directive({
  selector: '[libDisableInteractiveElements]',
})
export class DisableInteractiveElementsDirective implements OnChanges {
  @Input() disabledFlag = false;

  #elementTypes = `input,select,button`;

  constructor(private readonly element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('disabledFlag' in changes) {
      const elements = this.#getElements();
      this.#doReadOnly(elements);
    }
  }

  #getElements = (): InteractiveElement[] => this.element.nativeElement.querySelectorAll(this.#elementTypes);

  #doReadOnly(elements: InteractiveElement[]) {
    elements.forEach(element => {
      element.disabled = this.disabledFlag;
    });
  }
}
