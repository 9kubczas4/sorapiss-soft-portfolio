import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleUtilsRoutingModule } from './sample-utils-routing.module';

@NgModule({
  declarations: [],
  imports: [
    // vendor
    CommonModule,

    // routing
    SampleUtilsRoutingModule,
  ],
})
export class SampleUtilsModule {}
