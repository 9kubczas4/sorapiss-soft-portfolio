import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormStrategyRoutingModule } from './form-strategy-routing.module';
import { FormStrategyComponent } from './form-strategy.component';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';

@NgModule({
  declarations: [FormStrategyComponent],
  imports: [
    // vendor
    CommonModule,

    // routing
    FormStrategyRoutingModule,

    // common
    SamplePageComponent
  ],
})
export class FormStrategyModule {}
