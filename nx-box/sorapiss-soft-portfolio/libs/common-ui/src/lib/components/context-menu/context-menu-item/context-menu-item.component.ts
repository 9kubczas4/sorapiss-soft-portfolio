import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ssp-context-menu-item',
  exportAs: 'sspContextMenuItem',
  templateUrl: './context-menu-item.component.html',
  styleUrls: ['./context-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuItemComponent {}
