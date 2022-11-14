import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { ContextMenuContentDirective, MENU_CONTENT } from './context-menu-content/context-menu-content.directive';
import { ContextMenuItemComponent } from './context-menu-item/context-menu-item.component';
import { menuAnimations } from './context-menu.animations';

@Component({
  selector: 'lib-context-menu',
  exportAs: 'libMenu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  animations: [menuAnimations.transformMenu, menuAnimations.fadeInItems],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent implements AfterContentInit {
  @ContentChildren(ContextMenuItemComponent, { descendants: false })
  items: QueryList<ContextMenuItemComponent> | null = null;

  @ViewChild(TemplateRef) templateRef: TemplateRef<any> | null = null;

  @ContentChild(MENU_CONTENT) lazyContent?: ContextMenuContentDirective;

  panelAnimationState: 'void' | 'enter' = 'void';
  isAnimating = false;

  readonly animationDone = new Subject<AnimationEvent>();

  constructor() {}

  ngAfterContentInit(): void {}

  startAnimation() {
    this.panelAnimationState = 'enter';
  }

  resetAnimation() {
    this.panelAnimationState = 'void';
  }

  onAnimationDone(event: AnimationEvent) {
    this.animationDone.next(event);
    this.isAnimating = false;
  }

  onAnimationStart(event: AnimationEvent) {
    this.isAnimating = true;
  }
}
