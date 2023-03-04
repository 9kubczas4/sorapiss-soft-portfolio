import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FeatureToggleService } from '../services/feature-toggle.service';

@Directive({
  selector: '[sspFeatureToggle]',
})
export class FeatureToggleDirective<T extends string> implements OnInit {
  @Input('sspFeatureToggle') public featureToggleKey?: T;
  @Input() public sspFeatureToggleElse?: TemplateRef<unknown>;

  constructor(
    private readonly featureToggleService: FeatureToggleService<T>,
    private readonly templateRef: TemplateRef<unknown>,
    private readonly viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    if (
      this.featureToggleKey &&
      this.featureToggleService.isFlagEnabled(this.featureToggleKey)
    ) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (this.sspFeatureToggleElse) {
      this.viewContainer.createEmbeddedView(this.sspFeatureToggleElse);
    } else {
      this.viewContainer.clear();
    }
  }
}
