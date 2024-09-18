import { take, timer } from 'rxjs';
import { ChangeDetectorRef, Component, DestroyRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideoutPosition, SlideoutSize } from './slideout.enum';
import { SlideoutPositionPipe } from './slideout-position.pipe';
import { trigger, transition, style, animate } from '@angular/animations';
import { OverlayComponent } from '../overlay/overlay.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  protected transitionInProgress = false;

  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  position = SlideoutPosition.RIGHT;
  SlideoutSize = SlideoutSize;

  hide(): void {
    if (this.transitionInProgress) {
      return;
    }

    this.transitionInProgress = true;
    this.opened = !this.opened;

    timer(750).pipe(take(1), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (!this.opened) {
        this.closed.emit();
      }
      this.transitionInProgress = false;
      this.changeDetectorRef.markForCheck();
    });
  }
}
