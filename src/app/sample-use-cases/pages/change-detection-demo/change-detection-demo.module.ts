import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionDemoRoutingModule } from './change-detection-demo-routing.module';
import { ChangeDetectionDemoComponent } from './change-detection-demo.component';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';
import { components } from './components';
import { ProcessDataPipe } from './pipes/process-data.pipe';

@NgModule({
  declarations: [
    ChangeDetectionDemoComponent,
    ...components,
    ProcessDataPipe,
  ],
  imports: [
    // vendor
    CommonModule,

    // routing
    ChangeDetectionDemoRoutingModule,

    // common
    SamplePageComponent,
  ],
})
export class ChangeDetectionDemoModule {}
