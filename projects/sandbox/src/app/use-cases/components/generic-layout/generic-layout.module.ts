import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericLayoutRoutingModule } from './generic-layout-routing.module';
import { SamplePageModule } from '@common-ui';
import { GenericLayoutComponent } from './generic-layout.component';
import { NavigationModule } from './shared/navigation/navigation.module';
import { FeatureTableComponent } from './shared/feature-table/feature-table.component';
import { FeatureTabHeaderComponent } from './shared/feature-tab-header/feature-tab-header.component';
import { UiService } from './services/ui.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GenericLayoutComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    GenericLayoutRoutingModule,
    SamplePageModule,
    NavigationModule,

    // standalone components
    FeatureTabHeaderComponent,
    FeatureTableComponent,
  ],
  providers: [UiService],
})
export class GenericLayoutModule {}
