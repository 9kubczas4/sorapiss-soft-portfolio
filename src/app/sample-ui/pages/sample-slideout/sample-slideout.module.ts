import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleSlideoutComponent } from './sample-slideout.component';
import {
  SamplePageComponent,
  SlideoutComponent,
} from '@sorapiss-soft-portfolio/common-ui';
import { SampleSlideoutRoutingModule } from './sample-slideout-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export const materialModules = [MatSelectModule, MatSlideToggleModule];

@NgModule({
  declarations: [SampleSlideoutComponent],
  imports: [
    // vendor
    CommonModule,

    // routing
    SampleSlideoutRoutingModule,

    // common
    SamplePageComponent,
    SlideoutComponent,

    // material
    ...materialModules,
  ],
})
export class SampleSlideoutModule {}
