import {
  Directive,
  InjectionToken,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

export const MENU_CONTENT = new InjectionToken<ContextMenuContentDirective>(
  'MenuContent'
);

@Directive({
  selector: 'ng-template[sspContextMenuContent]',
  providers: [
    { provide: MENU_CONTENT, useExisting: ContextMenuContentDirective },
  ],
})
export class ContextMenuContentDirective {
  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly template: TemplateRef<any>
  ) {}

  attach(context: any): void {
    this.viewContainerRef.createEmbeddedView(this.template, context);
  }

  detach(): void {
    this.viewContainerRef.clear();
  }
}
