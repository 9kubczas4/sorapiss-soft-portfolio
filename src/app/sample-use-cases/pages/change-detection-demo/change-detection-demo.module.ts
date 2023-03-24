import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionDemoRoutingModule } from './change-detection-demo-routing.module';
import { ChangeDetectionDemoComponent } from './change-detection-demo.component';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';
import { components } from './components';
import { ProcessDataPipe } from './pipes/process-data.pipe';
import { ElementWithDefaultCdStrategyComponent } from './components/element-with-default-cd-strategy/element-with-default-cd-strategy.component';

@NgModule({
  declarations: [
    ChangeDetectionDemoComponent,
    ...components,
    ProcessDataPipe,
    ElementWithDefaultCdStrategyComponent,
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
