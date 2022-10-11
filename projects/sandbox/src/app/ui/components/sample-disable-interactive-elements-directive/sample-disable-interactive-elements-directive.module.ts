import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleDisableInteractiveElementsDirectiveRoutingModule } from './sample-disable-interactive-elements-directive-routing.module';
import { SampleDisableInteractiveElementsDirectiveComponent } from './sample-disable-interactive-elements-directive.component';
import { DisableInteractiveElementsModule, SamplePageModule } from '@common-ui';
import { materialModules } from './material';

@NgModule({
  declarations: [SampleDisableInteractiveElementsDirectiveComponent],
  imports: [
    CommonModule,
    SamplePageModule,
    SampleDisableInteractiveElementsDirectiveRoutingModule,
    DisableInteractiveElementsModule,

    ...materialModules,
  ],
})
export class SampleDisableInteractiveElementsDirectiveModule {}
