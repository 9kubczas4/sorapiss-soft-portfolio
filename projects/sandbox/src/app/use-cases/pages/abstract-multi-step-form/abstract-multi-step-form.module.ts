import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbstractMultiStepFormRoutingModule } from './abstract-multi-step-form-routing.module';
import { AbstractMultiStepFormComponent } from './abstract-multi-step-form.component';
import { SamplePageModule } from '@common-ui';

@NgModule({
  declarations: [AbstractMultiStepFormComponent],
  imports: [CommonModule, AbstractMultiStepFormRoutingModule, SamplePageModule],
})
export class AbstractMultiStepFormModule {}
