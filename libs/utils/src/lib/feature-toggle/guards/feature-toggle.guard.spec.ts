import { ActivatedRouteSnapshot, Route, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/jest';
import { TestFeatureFlag } from '../services/feature-toggle.fixture';
import { FeatureToggleService } from '../services/feature-toggle.service';
import { FeatureToggleGuard } from './feature-toggle.guard';

describe('FeatureToggleGuard', () => {
  let spectator: SpectatorService<FeatureToggleGuard<TestFeatureFlag>>;
  let service: FeatureToggleGuard<TestFeatureFlag>;
  const featureFlagRedirect = 'redirect';

  const createService = createServiceFactory<
    FeatureToggleGuard<TestFeatureFlag>
  >({
    service: FeatureToggleGuard,
    imports: [RouterTestingModule],
    providers: [
      mockProvider(FeatureToggleService, {
        isFlagEnabled: jest.fn().mockReturnValue(true),
      }),
    ],
  });

  const mockIsEnabledAsFalse = (
    featureToggleService: FeatureToggleGuard<TestFeatureFlag>
  ) => {
    const spy = jest.spyOn(
      featureToggleService['featureToggle'],
      'isFlagEnabled'
    );
    spy.mockReturnValue(false);
  };

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
    jest.clearAllMocks();
  });

  it('should activate route when feature is enabled', () => {
    const route = {
      data: { featureFlag: 'enabledFeature', featureFlagRedirect },
    } as unknown as ActivatedRouteSnapshot;

    expect(service.canActivate(route)).toBe(true);
  });

  it('should load module when feature is enabled', () => {
    const route = {
      data: { featureFlag: 'enabledFeature', featureFlagRedirect },
    } as unknown as Route;

    expect(service.canLoad(route)).toBeTruthy();
  });

  it('should activate children when feature is enabled', () => {
    const route = {
      data: { featureFlag: 'enabledFeature', featureFlagRedirect },
    } as unknown as ActivatedRouteSnapshot;

    expect(service.canActivateChild(route)).toBeTruthy();
  });

  it('should redirect when feature is disabled', () => {
    mockIsEnabledAsFalse(service);

    const route = {
      data: { featureFlag: 'disabledFeature', featureFlagRedirect },
    } as unknown as ActivatedRouteSnapshot;
    const canActivate = service.canActivate(route) as UrlTree;

    expect(canActivate.root.children['primary'].segments[0].path).toStrictEqual(
      featureFlagRedirect
    );
  });

  it('should does not load module when feature is disabled', () => {
    mockIsEnabledAsFalse(service);

    const route = {
      data: { featureFlag: 'disabledFeature' },
    } as unknown as Route;

    expect(service.canLoad(route)).toBeFalsy();
  });

  it('should does not activate children when feature is disabled', () => {
    mockIsEnabledAsFalse(service);

    const route = {
      data: { featureFlag: 'disabledFeature' },
    } as unknown as ActivatedRouteSnapshot;

    expect(service.canActivateChild(route)).toBeFalsy();
  });
});
