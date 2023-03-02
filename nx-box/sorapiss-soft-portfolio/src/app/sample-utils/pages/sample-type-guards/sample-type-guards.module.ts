import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleTypeGuardsRoutingModule } from './sample-type-guards-routing.module';
import { SampleTypeGuardsComponent } from './sample-type-guards.component';
import { ValuePipe } from './pipes/value.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export const materialModules = [MatIconModule, MatListModule];

@NgModule({
  declarations: [SampleTypeGuardsComponent, ValuePipe],
  imports: [
    // vendor
    CommonModule,

    // routing
    SampleTypeGuardsRoutingModule,

    // material
    ...materialModules,

    // common
    SamplePageComponent
  ],
})
export class SampleTypeGuardsModule {}
