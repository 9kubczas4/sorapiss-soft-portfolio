import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '../overlay';
import { SlideoutPosition } from './slideout.enums';
import { SlideoutPositionPipe } from './slideout-position.pipe';

@Component({
  selector: 'lib-slideout',
  standalone: true,
  templateUrl: './slideout.component.html',
  styleUrls: ['./slideout.component.scss'],
  imports: [CommonModule, OverlayModule, SlideoutPositionPipe],
})
export class SlideoutComponent {
  @Input() opened = true;
  @Input() position = SlideoutPosition.RIGHT;
}
