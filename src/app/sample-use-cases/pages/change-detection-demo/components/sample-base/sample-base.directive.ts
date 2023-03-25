import { Directive, ElementRef, inject, NgZone } from '@angular/core';
import { ChangeDetectionLogService } from '../../services/change-detection-log.service';

@Directive()
export abstract class SampleBaseDirective {
  protected abstract name: string;

  private readonly elementRef = inject(ElementRef);
  private readonly zone = inject(NgZone);
  protected readonly changeDetectionLogService = inject(
    ChangeDetectionLogService
  );

  doNothing(): void {
    this.changeDetectionLogService.appendLog(this.name, `Do nothing`);
  }

  public visualizeChangeDetectionRan(): void {
    this.changeDetectionLogService.appendLog(
      this.name,
      `Change detection triggered.`
    );
    this.elementRef.nativeElement.classList.add('detecting');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.elementRef.nativeElement.classList.remove('detecting');
      }, 1000);
    });
  }
}
