import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';

@NgModule({
  declarations: [SamplePageComponent],
  imports: [
    // vendor
    CommonModule,

    // routing
    SamplePageRoutingModule
  ],
})
export class SamplePageModule {}
