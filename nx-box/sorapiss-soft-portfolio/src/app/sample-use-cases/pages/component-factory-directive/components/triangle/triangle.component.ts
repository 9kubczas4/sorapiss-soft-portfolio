import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentTypes } from '../../enums/component-type';
import { IComponent } from '../../interfaces/component-factory-directive.interfaces';

@Component({
  selector: 'ssp-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TriangleComponent implements IComponent {
  type = ComponentTypes.triangle;
  color = 'black';
}
