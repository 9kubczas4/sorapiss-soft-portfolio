import { Directive, ElementRef, inject, NgZone } from '@angular/core';

@Directive()
export abstract class SampleBaseDirective {
  protected abstract name: string;

  private readonly elementRef = inject(ElementRef);
  private readonly zone = inject(NgZone);

  doNothing(): void {
    console.log(`Do nothing ${this.name}`);
  }

  public visualizeChangeDetectionRan(): void {
    this.elementRef.nativeElement.classList.add('detecting');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.elementRef.nativeElement.classList.remove('detecting');
      }, 1000);
    });
  }
}
