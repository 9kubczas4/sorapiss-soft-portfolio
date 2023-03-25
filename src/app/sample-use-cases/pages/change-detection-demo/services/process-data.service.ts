import { Injectable, inject } from '@angular/core';
import { ChangeDetectionLogService } from './change-detection-log.service';

@Injectable()
export class ProcessDataService {
  dataSource = [1, 2, 3, 4, 5, 6, 7, 8];

  private readonly changeDetectionLogService = inject(
    ChangeDetectionLogService
  );

  processItems(input: number[], calledBy: string): number[] {
    this.changeDetectionLogService.appendLog(calledBy, `Process items called.`);
    return input.filter((item) => item % 2 === 0);
  }
}
