import { SecondService } from './services/second.service';
import { FirstService } from './services/first.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericLayoutRoutingModule } from './generic-layout-routing.module';
import { SamplePageModule } from '@common-ui';
import { GenericLayoutComponent } from './generic-layout.component';
import { NavigationModule } from './shared/navigation/navigation.module';
import { FeatureTabHeaderModule } from './shared/feature-tab-header/feature-tab-header.module';
import { ThirdService } from './services/third.service';

@NgModule({
  declarations: [GenericLayoutComponent],
  imports: [CommonModule, GenericLayoutRoutingModule, SamplePageModule, FeatureTabHeaderModule, NavigationModule],
  providers: [FirstService, SecondService, ThirdService],
})
export class GenericLayoutModule {}
