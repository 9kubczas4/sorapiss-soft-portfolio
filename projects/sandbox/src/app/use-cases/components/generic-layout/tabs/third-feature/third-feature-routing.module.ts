import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdFeatureComponent } from './third-feature.component';

const routes: Routes = [
  {
    path: '',
    component: ThirdFeatureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdFeatureRoutingModule {}
