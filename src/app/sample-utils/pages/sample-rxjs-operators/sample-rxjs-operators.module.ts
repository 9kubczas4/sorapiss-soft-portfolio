import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRxjsOperatorsRoutingModule } from './sample-rxjs-operators-routing.module';
import { SampleRxjsOperatorsComponent } from './sample-rxjs-operators.component';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';

@NgModule({
  declarations: [SampleRxjsOperatorsComponent],
  imports: [
    // vendor
    CommonModule,

    // routing
    SampleRxjsOperatorsRoutingModule,

    // common
    SamplePageComponent,
  ],
})
export class SampleRxjsOperatorsModule {}
