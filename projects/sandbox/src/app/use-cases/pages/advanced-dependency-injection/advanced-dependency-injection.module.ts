import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedDependencyInjectionRoutingModule } from './advanced-dependency-injection-routing.module';
import { AdvancedDependencyInjectionComponent } from './advanced-dependency-injection.component';
import { SamplePageModule } from '@common-ui';
import { SAMPLE_TOKEN } from './const/sample-token';

@NgModule({
  declarations: [AdvancedDependencyInjectionComponent],
  imports: [CommonModule, AdvancedDependencyInjectionRoutingModule, SamplePageModule],
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
