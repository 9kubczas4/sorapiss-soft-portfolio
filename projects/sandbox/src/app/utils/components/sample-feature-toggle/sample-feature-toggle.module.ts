import { FeatureToggleModule } from '@ng-utils';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleFeatureToggleComponent } from './sample-feature-toggle.component';
import { SamplePageModule } from '@common-ui';
import { materialModules } from './material';

@NgModule({
  declarations: [SampleFeatureToggleComponent],
  imports: [CommonModule, SamplePageModule, FeatureToggleModule, ...materialModules],
})
export class SampleFeatureToggleModule {}
