import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from './context-menu.component';
import { ContextMenuItemComponent } from './context-menu-item/context-menu-item.component';
import { ContextMenuTriggerDirective } from './context-menu-trigger/context-menu-trigger.directive';

@NgModule({
  declarations: [ContextMenuComponent, ContextMenuItemComponent, ContextMenuTriggerDirective],
  imports: [CommonModule],
  exports: [ContextMenuComponent, ContextMenuItemComponent, ContextMenuTriggerDirective],
})
export class ContextMenuModule {}
