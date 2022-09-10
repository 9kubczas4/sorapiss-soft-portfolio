import { AbstractMultiStepFormComponent } from './abstract-multi-step-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: AbstractMultiStepFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbstractMultiStepFormRoutingModule {}
