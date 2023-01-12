import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleFunctionsComponent } from './sample-functions.component';

const routes: Routes = [
  {
    path: '',
    component: SampleFunctionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleFunctionsRoutingModule {}
