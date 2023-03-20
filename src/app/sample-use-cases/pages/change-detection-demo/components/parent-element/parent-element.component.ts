import { Component, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'ssp-parent-element',
  templateUrl: './parent-element.component.html',
  styleUrls: [
    './parent-element.component.scss',
    './../../shared/styles.scss'
  ],
})
export class ParentElementComponent {
  constructor(
    private elementRef: ElementRef,
    private zone: NgZone) { }

  doNothing(): void {
    console.log(`Do nothing parent`);
  }

  public visualizeChangeDetectionRan(): void {
    this.elementRef.nativeElement
      .classList.add('detecting');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.elementRef
          .nativeElement
          .classList
          .remove('detecting');
      }, 1000);
    });
  }
}
