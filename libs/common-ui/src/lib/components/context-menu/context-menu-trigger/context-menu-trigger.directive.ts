import { OverlayService } from './../../overlay/overlay.service';
import { ContextMenuComponent } from './../context-menu.component';
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewContainerRef,
  OnInit,
} from '@angular/core';
import { skip, Subscription, filter } from 'rxjs';

export type ContextMenuData = { [key: string]: string | boolean | number };

@Directive({
  selector: '[sspContextMenuTriggerFor]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '(click)': 'handleClick($event)',
  },
})
export class ContextMenuTriggerDirective implements OnDestroy, OnInit {
  @Input('sspContextMenuTriggerFor') menu: ContextMenuComponent | null = null;
  @Input() sspContextMenuTriggerData?: ContextMenuData;

  @Output() readonly menuOpened: EventEmitter<void> = new EventEmitter<void>();
  @Output() readonly menuClosed: EventEmitter<void> = new EventEmitter<void>();

  private menuOpen = false;
  private closingActionsSubscription = Subscription.EMPTY;

  constructor(
    private readonly element: ElementRef<HTMLElement>,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly overlayService: OverlayService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.closingActionsSubscription = this.overlayService.isDisplayed
      .pipe(
        skip(1),
        filter((isDisplayed) => !isDisplayed)
      )
      .subscribe(() => {
        this.closeMenu();
      });
  }

  ngOnDestroy(): void {
    this.closingActionsSubscription.unsubscribe();
  }

  handleClick(): void {
    return this.menuOpen ? this.closeMenu() : this.openMenu();
  }

  closeMenu(): void {
    this.menu?.resetAnimation();
    this.#setIsMenuOpen(false);
    this.menu?.lazyContent?.detach();
    this.viewContainerRef.clear();
  }

  openMenu(): void {
    if (this.menuOpen || !this.menu) {
      return;
    }

    if (this.menu.lazyContent) {
      this.menu.lazyContent.attach(this.sspContextMenuTriggerData);
    }

    this.#initMenu();

    if (this.menu instanceof ContextMenuComponent) {
      this.menu.startAnimation();

      if (this.menu.templateRef) {
        this.overlayService.displayOverlay(
          this.viewContainerRef,
          this.element,
          this.menu.templateRef,
          this.changeDetectorRef
        );
      }
    }
  }

  #initMenu(): void {
    this.#setIsMenuOpen(true);
  }

  #setIsMenuOpen(isOpen: boolean): void {
    this.menuOpen = isOpen;

    if (this.menuOpen) {
      this.menuOpened.emit();
    } else {
      this.menuClosed.emit();
    }
  }
}
