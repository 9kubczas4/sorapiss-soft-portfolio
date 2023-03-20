import { Component, ElementRef, inject, NgZone } from '@angular/core';
import { ProcessDataService } from '../../services/process-data.service';

@Component({
  selector: 'ssp-element-with-getter',
  templateUrl: './element-with-getter.component.html',
  styleUrls: [
    './element-with-getter.component.scss',
    './../../shared/styles.scss'
  ],
  providers: [ProcessDataService]
})
export class ElementWithGetterComponent {
  private readonly processDataService = inject(ProcessDataService);

  get items(): number[] {
    return this.processDataService.processItems(this.processDataService.dataSource, 'getter');
  }

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone) { }

  changeDataSource(): void {
    console.log('change dataSource');
    this.processDataService.dataSource = [...this.processDataService.dataSource, this.processDataService.dataSource.length + 1];
  }

  doNothing(): void {
    console.log('button click - do nothing');
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
