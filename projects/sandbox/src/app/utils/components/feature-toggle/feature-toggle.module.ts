import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureToggleComponent } from './feature-toggle.component';
import { SamplePageModule } from '@common-ui';

@NgModule({
  declarations: [FeatureToggleComponent],
  imports: [CommonModule, SamplePageModule],
})
export class FeatureToggleModule {}
