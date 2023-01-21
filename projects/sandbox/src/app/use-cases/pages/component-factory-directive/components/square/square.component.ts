import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentTypes } from '../../enums/component-type';
import { IComponent } from '../../interfaces/component-factory-directive.interfaces';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareComponent implements IComponent {
  type = ComponentTypes.square;
  color = 'black';
}
