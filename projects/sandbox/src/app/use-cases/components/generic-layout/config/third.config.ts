import { FeatureActions } from '../enums/feature-actions';
import { SampleFeatures } from '../enums/sample-features';
import { RouteConfig } from '../interfaces/route-config';

export const thirdConfig: RouteConfig = {
  label: SampleFeatures.Feature3,
  actions: [
    {
      label: 'Edit Feature 3',
      action: FeatureActions.Refresh,
    },
  ],
  columns: [
    {
      label: 'ID',
      property: 'id',
    },
    {
      label: 'Third',
      property: 'third',
    },
  ],
};
