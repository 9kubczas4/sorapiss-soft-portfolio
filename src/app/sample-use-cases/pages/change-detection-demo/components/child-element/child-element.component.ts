import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone } from '@angular/core';

@Component({
  selector: 'ssp-child-element',
  templateUrl: './child-element.component.html',
  styleUrls: [
    './child-element.component.scss',
    './../../shared/styles.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildElementComponent {
  @Input() name = 'Child';

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone) { }

  doNothing(): void {
    console.log(`Do nothing ${this.name}`);
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
