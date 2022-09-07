import { Injectable } from '@angular/core';
import { FeatureFlag, FeatureFlagApiResponse } from '../models/feature-toggle.model';

@Injectable({
  providedIn: 'root',
})
export class FeatureToggleService<T extends string> {
  #features: Array<FeatureFlag<T>> = [];

  /* TODO: It's only sample implementation, that's why I've used fake data
   */
  async loadFeatureFlags(): Promise<void> {
    const response = await fetch('./fake-api.json');
    const data: FeatureFlagApiResponse<T> = await response.json();
    this.#features = data.features;
  }

  isFlagEnabled(flag: T): boolean {
    return this.#features.find(featureFlag => featureFlag.key === flag)?.enabled ?? false;
  }

  isFlagDisabled(flag: T): boolean {
    return !this.isFlagEnabled(flag);
  }
}
