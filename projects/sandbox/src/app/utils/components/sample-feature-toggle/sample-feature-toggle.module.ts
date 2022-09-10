import { RouterModule } from '@angular/router';
import { FeatureToggleModule } from '@ng-utils';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleFeatureToggleComponent } from './sample-feature-toggle.component';
import { SamplePageModule } from '@common-ui';
import { materialModules } from './material';
import { SampleFeatureToggleRoutingModule } from './sample-feature-toggle-routing.module';

@NgModule({
  declarations: [SampleFeatureToggleComponent],
  imports: [
    CommonModule,
    SamplePageModule,
    FeatureToggleModule,
    ...materialModules,
    RouterModule,
    SampleFeatureToggleRoutingModule,
  ],
})
export class SampleFeatureToggleModule {}
