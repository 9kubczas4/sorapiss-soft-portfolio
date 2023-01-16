import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleSlideoutComponent } from './sample-slideout.component';
import { SamplePageModule, SlideoutComponent } from '@common-ui';
import { SampleSlideoutRoutingModule } from './sample-slideout-routing.module';

@NgModule({
  declarations: [SampleSlideoutComponent],
  imports: [CommonModule, SampleSlideoutRoutingModule, SamplePageModule, SlideoutComponent],
})
export class SampleSlideoutModule {}
