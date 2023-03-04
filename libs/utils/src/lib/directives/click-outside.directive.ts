import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[sspClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output('sspClickOutside') public clickOutside =
    new EventEmitter<HTMLElement>();

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement): void {
    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.clickOutside.emit(targetElement);
    }
  }
}
