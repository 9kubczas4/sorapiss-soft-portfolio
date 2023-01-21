import { CircleComponent } from '../components/circle/circle.component';
import { SquareComponent } from '../components/square/square.component';
import { TriangleComponent } from '../components/triangle/triangle.component';
import { ComponentTypes } from '../enums/component-type';
import { IComponent } from '../interfaces/component-factory-directive.interfaces';
import { Type } from '@angular/core';

export const componentsMap: Record<ComponentTypes, Type<IComponent> | null> = {
  [ComponentTypes.square]: SquareComponent,
  [ComponentTypes.circle]: CircleComponent,
  [ComponentTypes.triangle]: TriangleComponent,
};
