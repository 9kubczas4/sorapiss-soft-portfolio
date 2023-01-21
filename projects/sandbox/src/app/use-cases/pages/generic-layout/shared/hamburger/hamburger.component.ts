import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button[hamburger]',
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
