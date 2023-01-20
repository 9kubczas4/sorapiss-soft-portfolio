import { Position } from './../../interfaces/position';
import { Component, TemplateRef, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayComponent {
  @Input() content?: TemplateRef<any>;
  @Input() position?: Position;
  @Input() hasBackdrop = false;
  @Output() outsideClicked = new EventEmitter<void>();
}
