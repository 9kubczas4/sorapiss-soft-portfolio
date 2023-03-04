import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideoutPosition, SlideoutSize } from './slideout.enum';
import { SlideoutPositionPipe } from './slideout-position.pipe';
import { trigger, transition, style, animate } from '@angular/animations';
import { OverlayComponent } from '../overlay/overlay.component';

@Component({
  selector: 'ssp-slideout',
  standalone: true,
  templateUrl: './slideout.component.html',
  styleUrls: ['./slideout.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('750ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('750ms ease-in', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
  imports: [CommonModule, SlideoutPositionPipe, OverlayComponent],
})
export class SlideoutComponent {
  @Input() opened = true;
  @Input() size = SlideoutSize.STANDARD;

  @Output() openedChanged = new EventEmitter<boolean>();
  @Output() closed = new EventEmitter<void>();

  position = SlideoutPosition.RIGHT;
  SlideoutSize = SlideoutSize;

  hide(): void {
    this.opened = !this.opened;
    if (!this.opened) {
      this.closed.emit();
    }
  }
}
