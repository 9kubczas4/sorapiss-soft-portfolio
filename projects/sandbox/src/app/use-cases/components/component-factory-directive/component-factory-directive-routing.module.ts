import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentFactoryDirectiveComponent } from './component-factory-directive.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentFactoryDirectiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentFactoryDirectiveRoutingModule {}
