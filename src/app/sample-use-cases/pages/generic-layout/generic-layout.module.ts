import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericLayoutRoutingModule } from './generic-layout-routing.module';
import { GenericLayoutComponent } from './generic-layout.component';
import { NavigationModule } from './shared/navigation/navigation.module';
import { FeatureTableComponent } from './shared/feature-table/feature-table.component';
import { FeatureTabHeaderComponent } from './shared/feature-tab-header/feature-tab-header.component';
import { UiService } from './services/ui.service';
import { HttpClientModule } from '@angular/common/http';
import { SlideoutService } from './services/slideout.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';

@NgModule({
  declarations: [GenericLayoutComponent],
  imports: [
    // vendor
    CommonModule,
    HttpClientModule,

    // routing
    GenericLayoutRoutingModule,

    // common
    SamplePageComponent,

    // feature
    NavigationModule,

    // standalone components
    FeatureTabHeaderComponent,
    FeatureTableComponent,

    // material
    MatSidenavModule,
  ],
  providers: [SlideoutService, UiService],
})
export class GenericLayoutModule {}
