import { CommonModule } from '@angular/common';
import { Position } from '@sorapiss-soft-portfolio/utils';
import { Component, TemplateRef, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ssp-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class OverlayComponent {
  @Input() content?: TemplateRef<any>;
  @Input() position?: Position;
  @Input() hasBackdrop = false;
  @Output() outsideClicked = new EventEmitter<void>();
}
