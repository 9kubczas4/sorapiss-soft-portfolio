import { Pipe, PipeTransform } from '@angular/core';
import { Position } from '../../interfaces';
import { SlideoutPosition } from './slideout.enum';

@Pipe({
  name: 'slideoutPosition',
  standalone: true,
})
export class SlideoutPositionPipe implements PipeTransform {
  transform(value: SlideoutPosition): Position {
    return value === SlideoutPosition.RIGHT
      ? {
          top: 0,
          right: 0,
        }
      : {
          top: 0,
          left: 0,
        };
  }
}
