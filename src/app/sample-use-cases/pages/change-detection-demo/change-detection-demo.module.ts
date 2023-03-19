import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionDemoRoutingModule } from './change-detection-demo-routing.module';
import { ChangeDetectionDemoComponent } from './change-detection-demo.component';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';

@NgModule({
  declarations: [ChangeDetectionDemoComponent],
  imports: [
    // vendor
    CommonModule,

    // routing
    ChangeDetectionDemoRoutingModule,

    // common
    SamplePageComponent,
  ],
  providers: [],
})
export class ChangeDetectionDemoModule {}
