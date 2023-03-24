import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProcessDataService } from '../../services/process-data.service';
import { SampleBaseDirective } from '../sample-base/sample-base.directive';

@Component({
  selector: 'ssp-element-with-pipe',
  templateUrl: './element-with-pipe.component.html',
  styleUrls: ['./../../shared/styles.scss'],
  providers: [ProcessDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementWithPipeComponent extends SampleBaseDirective {
  private readonly processDataService = inject(ProcessDataService);

  dataSource = this.processDataService.dataSource;
  name = 'Component with Pipe';

  changeDataSource(): void {
    console.log('change dataSource');
    this.dataSource = [...this.dataSource, this.dataSource.length + 1];
  }
}
