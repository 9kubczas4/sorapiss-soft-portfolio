import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedDependencyInjectionRoutingModule } from './advanced-dependency-injection-routing.module';
import { AdvancedDependencyInjectionComponent } from './advanced-dependency-injection.component';
import { SAMPLE_TOKEN } from './const/sample-token';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';

@NgModule({
  declarations: [AdvancedDependencyInjectionComponent],
  imports: [
    // vendor
    CommonModule,

    // routing
    AdvancedDependencyInjectionRoutingModule,

    // common
    SamplePageComponent,
  ],
  providers: [
    {
      provide: SAMPLE_TOKEN,
      useValue: 'Sample Token 1',
      multi: true,
    },
    {
      provide: SAMPLE_TOKEN,
      useValue: 'Sample Token 2',
      multi: true,
    },
  ],
})
export class AdvancedDependencyInjectionModule {}
