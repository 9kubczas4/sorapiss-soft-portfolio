import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentFactoryDirectiveComponent } from './component-factory-directive.component';
import { ComponentFactoryDirective } from './directive/component-factory.directive';
import { CircleComponent } from './components/circle/circle.component';
import { SquareComponent } from './components/square/square.component';
import { TriangleComponent } from './components/triangle/triangle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFactoryDirectiveRoutingModule } from './component-factory-directive-routing.module';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

export const materialModules = [MatButtonModule, MatSelectModule];


@NgModule({
  declarations: [
    ComponentFactoryDirectiveComponent,
    ComponentFactoryDirective,
    CircleComponent,
    SquareComponent,
    TriangleComponent,
  ],
  imports: [
    // vendor
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // routing
    ComponentFactoryDirectiveRoutingModule,

    // common
    SamplePageComponent,

    // material
    ...materialModules,
  ],
})
export class ComponentFactoryDirectiveModule {}
