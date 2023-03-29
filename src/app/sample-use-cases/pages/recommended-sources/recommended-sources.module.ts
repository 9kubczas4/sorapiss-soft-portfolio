import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendedSourcesRoutingModule } from './recommended-sources-routing.module';
import { RecommendedSourcesComponent } from './recommended-sources.component';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';

@NgModule({
  declarations: [RecommendedSourcesComponent],
  imports: [
    // vendor
    CommonModule,

    // routing
    RecommendedSourcesRoutingModule,

    // common
    SamplePageComponent,
  ],
})
export class RecommendedSourcesModule {}
