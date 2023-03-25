import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionDemoRoutingModule } from './change-detection-demo-routing.module';
import { ChangeDetectionDemoComponent } from './change-detection-demo.component';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';
import { components } from './components';
import { ProcessDataPipe } from './pipes/process-data.pipe';
import { ElementWithDefaultCdStrategyComponent } from './components/element-with-default-cd-strategy/element-with-default-cd-strategy.component';
import { ChangeDetectionLogService } from './services/change-detection-log.service';

const materialModules = [MatTableModule];

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

    // material
    ...materialModules,

    // common
    SamplePageComponent,
  ],
  providers: [ChangeDetectionLogService],
})
export class ChangeDetectionDemoModule {}
