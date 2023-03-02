export interface FeatureFlag<T extends string> {
  key: T;
  enabled: boolean;
}

export interface FeatureFlagApiResponse<T extends string> {
  features: Array<FeatureFlag<T>>;
}

export interface FeatureToggleRouteData<T extends string> {
  featureFlag: T;
  featureFlagRedirect?: string;
}
