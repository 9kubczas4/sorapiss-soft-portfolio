import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleContextMenuComponent } from './sample-context-menu.component';
import { SampleContextMenuRoutingModule } from './sample-context-menu-routing.module';
import { ContextMenuModule, SamplePageComponent } from '@sorapiss-soft-portfolio/common-ui';

@NgModule({
  declarations: [SampleContextMenuComponent],
  imports: [
    // vendor
    CommonModule,

    // routing
    SampleContextMenuRoutingModule,

    // common
    ContextMenuModule,
    SamplePageComponent
  ],
})
export class SampleContextMenuModule {}
