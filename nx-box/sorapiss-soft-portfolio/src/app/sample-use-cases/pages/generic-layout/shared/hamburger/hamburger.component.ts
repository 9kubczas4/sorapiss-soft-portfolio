import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[hamburger]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '(click)': 'toggle()',
  },
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
  standalone: true,
})
export class HamburgerComponent {
  @Input() opened: boolean | null = null;
  @Output() tabsVisibilityChange: EventEmitter<void> = new EventEmitter<void>();

  toggle(): void {
    this.opened = !this.opened;
    this.tabsVisibilityChange.emit();
  }
}
