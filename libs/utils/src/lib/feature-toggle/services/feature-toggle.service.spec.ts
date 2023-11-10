import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { FeatureToggleService } from './feature-toggle.service';
import {
  setupFakeFeatureToggles,
  TestFeatureFlag,
} from './feature-toggle.fixture';

describe('FeatureToggleService', () => {
  let spectator: SpectatorService<FeatureToggleService<TestFeatureFlag>>;
  let service: FeatureToggleService<TestFeatureFlag>;

  const createService = createServiceFactory<
    FeatureToggleService<TestFeatureFlag>
  >({
    service: FeatureToggleService,
  });

  beforeEach((done) => {
    spectator = createService();
    service = spectator.service;

    setupFakeFeatureToggles(service, done);
  });

  it('should enable or disable given flags', () => {
    expect(service.isFlagEnabled('enabledFeature')).toBe(true);
    expect(service.isFlagEnabled('disabledFeature')).toBe(false);
  });

  it('should disable unknown flags', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(service.isFlagEnabled('unknownFeature' as any)).toBe(false);
  });
});
