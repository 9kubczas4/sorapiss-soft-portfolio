## Feature Toggles

### Motivation

`Feature Toggles (often also refered to as Feature Flags) are a powerful technique, allowing teams to modify system behavior without changing code. They fall into various usage categories, and it's important to take that categorization into account when implementing and managing toggles. Toggles introduce complexity. We can keep that complexity in check by using smart toggle implementation practices and appropriate tools to manage our toggle configuration, but we should also aim to constrain the number of toggles in our system.`

Martin Fowler, https://martinfowler.com/articles/feature-toggles.html

Long story short, `Feature Toggles` is well known pattern which allows to hide/show features based on flag.

### Usage

FeatureToggleModule support Feature Toggles pattern on several levels:

- FeatureToggleService responsible for loading feature toggles, check if feature is enabled/disabled. (The current implementation contains loading data from json, but real could use API call or injecting feature toggles using some config provider).
- FeatureToggleGuard is an Angular Guard which allows to load module, activate routes when feature toggle is enabled. There is also possibility to redirect to alternative route when feature is disabled.
- FeatureToggleDirective is responsible for decide if HTML element could be displayed. An alternative template could be provided using `else`, please have a look into code sample.

_FeatureToggleService_

FeatureToggleService is provided in root, which means that when FeatureToggleModule will be imported, then FeatureToggleService could be injected using Angular DI.

```ts
constructor(
    private readonly featureToggleService: FeatureToggleService<FeatureToggleKey>,
  ) {}
```

_FeatureToggleGuard_

FeatureToggleGuard implements `CanActivate, CanLoad, CanActivateChild` which means the it could be used when we would like to be sure that:

- module will be loaded
- route will be activated
- route child will be activated
  only if featureFlag is enabled.

Routes array:

```ts
      ...
      {
        path: 'feature1',
        loadChildren: () => import('./sample-page/sample-page.module').then(m => m.SamplePageModule),
        data: {
          content: 'Feature 1 Content',
          featureFlag: FeatureToggleKey.Feature1,
          featureFlagRedirect: 'redirect'
        },
        canActivate: [FeatureToggleGuard],
        canLoad: [FeatureToggleGuard],
      },
      ...
```

**Arguments**

1. `featureFlag` - the key of feature flag
2. `featureFlagRedirect` - the route where app will be navigate to when feature flag is not enabled.

_FeatureToggleDirective_

In sample below div element will be displayed when feature toggle with key equal to `enabledFeature` will be really enabled, otherwise element will be destroyed.

```html
<div *sspFeatureToggle="'enabledFeature'" id="enabled">Enabled</div>
```

Sample below will show div element when `disabledFeature` would be enabled, otherwise `disabledTemplate` will be displayed.

```html
<div *sspFeatureToggle="'disabledFeature' else disabledTemplate" id="disabled">Disabled</div>
<ng-template #disabledTemplate><div id="elseDisabled">Else disabled</div></ng-template>
```
