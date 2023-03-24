import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProcessDataService } from '../../services/process-data.service';
import { SampleBaseDirective } from '../sample-base/sample-base.directive';

@Component({
  selector: 'ssp-element-with-template-function',
  templateUrl: './element-with-template-function.component.html',
  styleUrls: ['./../../shared/styles.scss'],
  providers: [ProcessDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementWithTemplateFunctionComponent extends SampleBaseDirective {
  private readonly processDataService = inject(ProcessDataService);

  name = 'Component with Template Function';

  getItems(): number[] {
    return this.processDataService.processItems(
      this.processDataService.dataSource,
      'template functions'
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
