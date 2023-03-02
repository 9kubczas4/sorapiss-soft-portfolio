import { FeatureFlag, FeatureFlagApiResponse } from '../models/feature-toggle.model';
import { FeatureToggleService } from './feature-toggle.service';
import fetchMock from 'jest-fetch-mock';

const featureFlags: Array<FeatureFlag<TestFeatureFlag>> = [
  {
    key: 'enabledFeature',
    enabled: true,
  },
  {
    key: 'disabledFeature',
    enabled: false,
  },
];

const response: FeatureFlagApiResponse<TestFeatureFlag> = {
  features: featureFlags,
};

export type TestFeatureFlag = 'enabledFeature' | 'disabledFeature';

export const setupFakeFeatureToggles = (service: FeatureToggleService<TestFeatureFlag>, done: jest.DoneCallback) => {
  fetchMock.mockResponse(JSON.stringify(response));
  service.loadFeatureFlags().then(() => {
    done();
  });
};
