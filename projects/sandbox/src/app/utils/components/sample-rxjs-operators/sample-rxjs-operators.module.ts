import { SamplePageModule } from '@common-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRxjsOperatorsRoutingModule } from './sample-rxjs-operators-routing.module';
import { SampleRxjsOperatorsComponent } from './sample-rxjs-operators.component';

@NgModule({
  declarations: [SampleRxjsOperatorsComponent],
  imports: [CommonModule, SampleRxjsOperatorsRoutingModule, SamplePageModule],
})
export class SampleRxjsOperatorsModule {}
