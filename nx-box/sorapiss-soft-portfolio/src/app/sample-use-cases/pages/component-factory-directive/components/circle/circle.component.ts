import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentTypes } from '../../enums/component-type';
import { IComponent } from '../../interfaces/component-factory-directive.interfaces';

@Component({
  selector: 'ssp-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleComponent implements IComponent {
  type = ComponentTypes.circle;
  color = 'black';
}
