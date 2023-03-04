import { Component, OnInit } from '@angular/core';
import { FeatureToggleKey } from './enums/feature-toggle-keys';
import { BehaviorSubject } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'ssp-sample-feature-toggle',
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
  readmeImport = import('raw-loader!./readme.md');

  constructor(private readonly router: Router) {}

  async ngOnInit(): Promise<void> {
    this.#loaded.next(true);
  }

  selectedTabChange($event: MatTabChangeEvent): void {
    this.router.navigateByUrl(
      `/utils/feature-toggle/feature${$event.index + 1}`
    );
  }
}
