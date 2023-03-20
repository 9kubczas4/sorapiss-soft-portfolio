import { Component, ElementRef, inject, NgZone } from '@angular/core';
import { ProcessDataService } from '../../services/process-data.service';

@Component({
  selector: 'ssp-element-with-pipe',
  templateUrl: './element-with-pipe.component.html',
  styleUrls: [
    './element-with-pipe.component.scss',
    './../../shared/styles.scss'
  ],
  providers: [ProcessDataService]
})
export class ElementWithPipeComponent {
  private readonly processDataService = inject(ProcessDataService);

  dataSource = this.processDataService.dataSource;

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone) { }

  changeDataSource(): void {
    console.log('change dataSource');
    this.dataSource = [...this.dataSource, this.dataSource.length + 1];
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
