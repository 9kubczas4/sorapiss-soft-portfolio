import { SamplePageModule } from '@common-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleTypeGuardsRoutingModule } from './sample-type-guards-routing.module';
import { SampleTypeGuardsComponent } from './sample-type-guards.component';
import { materialModules } from './material';
import { ValuePipe } from './pipes/value.pipe';

@NgModule({
  declarations: [SampleTypeGuardsComponent, ValuePipe],
  imports: [CommonModule, SampleTypeGuardsRoutingModule, SamplePageModule, ...materialModules],
})
export class SampleTypeGuardsModule {}
