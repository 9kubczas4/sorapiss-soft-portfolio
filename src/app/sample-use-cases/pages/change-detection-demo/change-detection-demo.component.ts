import { Log } from './interfaces/log';
import { Component, inject } from '@angular/core';
import { ChangeDetectionLogService } from './services/change-detection-log.service';

@Component({
  selector: 'ssp-change-detection-demo',
  templateUrl: './change-detection-demo.component.html',
  styleUrls: ['./change-detection-demo.component.scss', './shared/styles.scss'],
})
export class ChangeDetectionDemoComponent {
  private readonly changeDetectionLogService = inject(
    ChangeDetectionLogService
  );

  readmeImport = import('raw-loader!./readme.md');

  displayedColumns: (keyof Log)[] = ['timestamp', 'initiator', 'event'];
  logs$ = this.changeDetectionLogService.logs$;
}
