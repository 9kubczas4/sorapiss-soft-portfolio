import { Component, ElementRef, inject, NgZone } from '@angular/core';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ProcessDataService } from '../../services/process-data.service';

@Component({
  selector: 'ssp-element-with-async-pipe',
  templateUrl: './element-with-async-pipe.component.html',
  styleUrls: [
    './element-with-async-pipe.component.scss',
    './../../shared/styles.scss'
  ],
  providers: [ProcessDataService]
})
export class ElementWithAsyncPipeComponent {
  private readonly processDataService = inject(ProcessDataService);
  private readonly dataSource$ = new BehaviorSubject<number[]>(this.processDataService.dataSource);

  items$ = this.dataSource$.pipe(
    map((items) => this.processDataService.processItems(items, 'rxjs stream'))
  );

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone) { }

  changeDataSource(): void {
    console.log('change dataSource');
    this.processDataService.dataSource = [...this.processDataService.dataSource, this.processDataService.dataSource.length + 1];
    this.dataSource$.next(this.processDataService.dataSource);
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
