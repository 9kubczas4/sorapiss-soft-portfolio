import { SamplePageModule } from '@common-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleFunctionsRoutingModule } from './sample-functions-routing.module';
import { SampleFunctionsComponent } from './sample-functions.component';

@NgModule({
  declarations: [SampleFunctionsComponent],
  imports: [CommonModule, SampleFunctionsRoutingModule, SamplePageModule],
})
export class SampleFunctionsModule {}
