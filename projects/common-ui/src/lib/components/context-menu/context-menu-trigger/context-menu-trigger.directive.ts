import { ContextMenuComponent } from './../context-menu.component';
import { Directive, ElementRef, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[libContextMenuTriggerFor]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '(click)': 'handleClick($event)',
  },
})
export class ContextMenuTriggerDirective {
  @Input('libContextMenuTriggerFor') menu: ContextMenuComponent | null = null;
  @Input() libContextMenuTriggerData: any;

  @Output() readonly menuOpened: EventEmitter<void> = new EventEmitter<void>();
  @Output() readonly menuClosed: EventEmitter<void> = new EventEmitter<void>();

  private menuOpen = false;

  constructor(private readonly element: ElementRef<HTMLElement>, private readonly viewContainerRef: ViewContainerRef) {}

  handleClick(event: MouseEvent): void {
    return this.menuOpen ? this.closeMenu() : this.openMenu();
  }

  closeMenu(): void {
    this.#setIsMenuOpen(false);
    this.viewContainerRef.clear();
  }

  openMenu(): void {
    const menu = this.menu;

    if (this.menuOpen || !menu) {
      return;
    }

    if (menu.lazyContent) {
      menu.lazyContent.attach(this.libContextMenuTriggerData);
    }

    this.#initMenu(menu);

    if (menu instanceof ContextMenuComponent) {
      menu.startAnimation();

      if (menu.templateRef) {
        this.viewContainerRef.createEmbeddedView(menu.templateRef);
      }
    }
  }

  #initMenu(menu: ContextMenuComponent): void {
    this.#setIsMenuOpen(true);
  }

  // probably I don't need it
  #setIsMenuOpen(isOpen: boolean): void {
    this.menuOpen = isOpen;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
  }
}
