import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleRxjsOperatorsComponent } from './sample-rxjs-operators.component';

const routes: Routes = [
  {
    path: '',
    component: SampleRxjsOperatorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleRxjsOperatorsRoutingModule {}
