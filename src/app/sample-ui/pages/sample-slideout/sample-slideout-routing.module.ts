import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleSlideoutComponent } from './sample-slideout.component';

const routes: Routes = [
  {
    path: '',
    component: SampleSlideoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleSlideoutRoutingModule {}
