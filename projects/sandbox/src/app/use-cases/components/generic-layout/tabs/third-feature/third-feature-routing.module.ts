import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureTableComponent } from '../../shared/feature-table/feature-table.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdFeatureRoutingModule {}
