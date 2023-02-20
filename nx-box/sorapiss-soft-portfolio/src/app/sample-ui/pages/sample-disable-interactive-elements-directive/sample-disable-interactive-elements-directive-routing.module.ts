import { SampleDisableInteractiveElementsDirectiveComponent } from './sample-disable-interactive-elements-directive.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SampleDisableInteractiveElementsDirectiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleDisableInteractiveElementsDirectiveRoutingModule {}
