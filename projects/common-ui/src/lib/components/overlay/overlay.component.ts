import { OverlayService } from './overlay.service';
import { Component, TemplateRef, Input, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayComponent {
  @Input() content?: TemplateRef<any>;

  constructor(private readonly overlayService: OverlayService) {}

  hide(): void {
    this.overlayService.closeOverlay();
  }
}
