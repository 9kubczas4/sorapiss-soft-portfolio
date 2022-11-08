import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleContextMenuComponent } from './sample-context-menu.component';
import { SampleContextMenuRoutingModule } from './sample-context-menu-routing.module';
import { ContextMenuModule, SamplePageModule } from '@common-ui';

@NgModule({
  declarations: [SampleContextMenuComponent],
  imports: [CommonModule, SampleContextMenuRoutingModule, ContextMenuModule, SamplePageModule],
})
export class SampleContextMenuModule {}
