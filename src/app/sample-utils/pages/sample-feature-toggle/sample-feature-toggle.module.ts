import { RouterModule } from '@angular/router';
import { FeatureToggleModule } from '@sorapiss-soft-portfolio/utils';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleFeatureToggleComponent } from './sample-feature-toggle.component';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';
import { SampleFeatureToggleRoutingModule } from './sample-feature-toggle-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export const materialModules = [MatButtonModule, MatSlideToggleModule];

@NgModule({
  declarations: [SampleFeatureToggleComponent],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // routing
    SampleFeatureToggleRoutingModule,

    // material
    ...materialModules,

    // common
    FeatureToggleModule,
    SamplePageComponent,
  ],
})
export class SampleFeatureToggleModule {}
