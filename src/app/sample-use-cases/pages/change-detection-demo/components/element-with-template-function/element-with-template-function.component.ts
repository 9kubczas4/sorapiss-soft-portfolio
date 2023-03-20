import { Component, ElementRef, inject, NgZone } from '@angular/core';
import { ProcessDataService } from '../../services/process-data.service';

@Component({
  selector: 'ssp-element-with-template-function',
  templateUrl: './element-with-template-function.component.html',
  styleUrls: [
    './element-with-template-function.component.scss',
    './../../shared/styles.scss'
  ],
  providers: [ProcessDataService]
})
export class ElementWithTemplateFunctionComponent {
  private readonly processDataService = inject(ProcessDataService);

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone) { }

  getItems(): number[] {
    return this.processDataService.processItems(
      this.processDataService.dataSource,
      'template functions'
    );
  }

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
