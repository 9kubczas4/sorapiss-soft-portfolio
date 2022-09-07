import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureToggleService } from '../services/feature-toggle.service';

@Directive({
  selector: '[libFeatureToggle]',
})
export class FeatureToggleDirective<T extends string> implements OnInit {
  @Input('libFeatureToggle') public featureToggleKey?: T;
  @Input() public disabledFeatureTemplate?: TemplateRef<unknown>;

  constructor(
    private readonly featureToggleService: FeatureToggleService<T>,
    private readonly templateRef: TemplateRef<unknown>,
    private readonly viewContainer: ViewContainerRef,
  ) {}

  ngOnInit(): void {
    if (this.featureToggleKey && this.featureToggleService.isFlagEnabled(this.featureToggleKey)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (this.disabledFeatureTemplate) {
      this.viewContainer.createEmbeddedView(this.disabledFeatureTemplate);
    } else {
      this.viewContainer.clear();
    }
  }
}
