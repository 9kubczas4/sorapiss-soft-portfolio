import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleDisableInteractiveElementsDirectiveRoutingModule } from './sample-disable-interactive-elements-directive-routing.module';
import { SampleDisableInteractiveElementsDirectiveComponent } from './sample-disable-interactive-elements-directive.component';
import { SamplePageModule } from '@common-ui';

@NgModule({
  declarations: [SampleDisableInteractiveElementsDirectiveComponent],
  imports: [CommonModule, SamplePageModule, SampleDisableInteractiveElementsDirectiveRoutingModule],
})
export class SampleDisableInteractiveElementsDirectiveModule {}
