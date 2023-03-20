import { Pipe, PipeTransform, inject } from '@angular/core';
import { ProcessDataService } from '../services/process-data.service';

@Pipe({
  name: 'processData'
})
export class ProcessDataPipe implements PipeTransform {
  private readonly processDataService = inject(ProcessDataService);

  transform(value: number[]): number[] {
    return this.processDataService.processItems(value, 'pipe');
  }
}
