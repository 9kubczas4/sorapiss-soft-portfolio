import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ProcessDataService } from '../../services/process-data.service';
import { SampleBaseDirective } from '../sample-base/sample-base.directive';

@Component({
  selector: 'ssp-element-with-async-pipe',
  templateUrl: './element-with-async-pipe.component.html',
  styleUrls: ['./../../shared/styles.scss'],
  providers: [ProcessDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementWithAsyncPipeComponent extends SampleBaseDirective {
  private readonly processDataService = inject(ProcessDataService);
  private readonly dataSource$ = new BehaviorSubject<number[]>(
    this.processDataService.dataSource
  );

  name = 'Components with Async Pipe';

  items$ = this.dataSource$.pipe(
    map((items) => this.processDataService.processItems(items, 'rxjs stream'))
  );

  changeDataSource(): void {
    console.log('change dataSource');
    this.processDataService.dataSource = [
      ...this.processDataService.dataSource,
      this.processDataService.dataSource.length + 1,
    ];
    this.dataSource$.next(this.processDataService.dataSource);
  }
}
