import { FeatureToggleService } from '@ng-utils';
import { Component, OnInit } from '@angular/core';
import { FeatureToggleKey } from './enums/feature-toggle-keys';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sample-feature-toggle',
  templateUrl: './sample-feature-toggle.component.html',
  styleUrls: ['./sample-feature-toggle.component.scss'],
})
export class SampleFeatureToggleComponent implements OnInit {
  #loaded = new BehaviorSubject<boolean>(false);

  featureToggleKey = FeatureToggleKey;
  /*
  Disabled is used only cause FeatureToggleService doesn't expose
  list of the feature toggles.
  */
  features: Array<{ key: FeatureToggleKey; disabled: boolean }> = [
    { key: FeatureToggleKey.Feature1, disabled: false },
    { key: FeatureToggleKey.Feature2, disabled: true },
    { key: FeatureToggleKey.Feature3, disabled: false },
    { key: FeatureToggleKey.Feature4, disabled: false },
  ];
  loaded = this.#loaded.asObservable();
  readmeImport = import('./readme.md');

  constructor(private readonly featureToggleService: FeatureToggleService<FeatureToggleKey>) {}

  async ngOnInit(): Promise<void> {
    await this.featureToggleService.loadFeatureFlags();
    this.#loaded.next(true);
  }
}
