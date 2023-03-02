import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleDisableInteractiveElementsDirectiveRoutingModule } from './sample-disable-interactive-elements-directive-routing.module';
import { SampleDisableInteractiveElementsDirectiveComponent } from './sample-disable-interactive-elements-directive.component';
import { DisableInteractiveElementsDirective, SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export const materialModules = [MatButtonModule, MatInputModule, MatSelectModule, MatSlideToggleModule];

@NgModule({
  declarations: [SampleDisableInteractiveElementsDirectiveComponent],
  imports: [
    // vendor
    CommonModule,

    // routing
    SampleDisableInteractiveElementsDirectiveRoutingModule,

    // common
    DisableInteractiveElementsDirective,
    SamplePageComponent,

    // material
    ...materialModules,
  ],
})
export class SampleDisableInteractiveElementsDirectiveModule {}
