import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondFeatureComponent } from './second-feature.component';

const routes: Routes = [
  {
    path: '',
    component: SecondFeatureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondFeatureRoutingModule {}
