import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'lib-context-menu-item',
  exportAs: 'libContextMenuItem',
  templateUrl: './context-menu-item.component.html',
  styleUrls: ['./context-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuItemComponent implements OnInit {
  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {}
}
