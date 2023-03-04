import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbstractMultiStepFormRoutingModule } from './abstract-multi-step-form-routing.module';
import { AbstractMultiStepFormComponent } from './abstract-multi-step-form.component';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';

@NgModule({
  declarations: [AbstractMultiStepFormComponent],
  imports: [
    // vendor
    CommonModule,

    // routing
    AbstractMultiStepFormRoutingModule,

    // common
    SamplePageComponent,
  ],
})
export class AbstractMultiStepFormModule {}
