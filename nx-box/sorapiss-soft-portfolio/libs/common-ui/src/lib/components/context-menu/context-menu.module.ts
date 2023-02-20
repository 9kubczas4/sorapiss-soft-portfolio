import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from './context-menu.component';
import { ContextMenuItemComponent } from './context-menu-item/context-menu-item.component';
import { ContextMenuTriggerDirective } from './context-menu-trigger/context-menu-trigger.directive';
import { ContextMenuContentDirective } from './context-menu-content/context-menu-content.directive';

@NgModule({
  declarations: [
    ContextMenuComponent,
    ContextMenuContentDirective,
    ContextMenuItemComponent,
    ContextMenuTriggerDirective,
  ],
  imports: [CommonModule],
  exports: [ContextMenuComponent, ContextMenuContentDirective, ContextMenuItemComponent, ContextMenuTriggerDirective],
})
export class ContextMenuModule {}
