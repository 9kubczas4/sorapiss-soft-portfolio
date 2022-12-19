import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericLayoutRoutingModule } from './generic-layout-routing.module';
import { SamplePageModule } from '@common-ui';
import { GenericLayoutComponent } from './generic-layout.component';
import { NavigationModule } from './shared/navigation/navigation.module';
import { FeatureTabHeaderModule } from './shared/feature-tab-header/feature-tab-header.module';
import { FeatureTableComponent } from './shared/feature-table/feature-table.component';

@NgModule({
  declarations: [GenericLayoutComponent],
  imports: [
    CommonModule,
    GenericLayoutRoutingModule,
    SamplePageModule,
    FeatureTabHeaderModule,
    NavigationModule,
    FeatureTableComponent,
  ],
})
export class GenericLayoutModule {}
