import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProcessDataService } from '../../services/process-data.service';
import { SampleBaseDirective } from '../sample-base/sample-base.directive';

@Component({
  selector: 'ssp-element-with-getter',
  templateUrl: './element-with-getter.component.html',
  styleUrls: ['./../../shared/styles.scss'],
  providers: [ProcessDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementWithGetterComponent extends SampleBaseDirective {
  private readonly processDataService = inject(ProcessDataService);

  name = 'Component with Getter';

  get items(): number[] {
    return this.processDataService.processItems(
      this.processDataService.dataSource,
      'getter'
    );
  }

  changeDataSource(): void {
    console.log('change dataSource');
    this.processDataService.dataSource = [
      ...this.processDataService.dataSource,
      this.processDataService.dataSource.length + 1,
    ];
  }
}
