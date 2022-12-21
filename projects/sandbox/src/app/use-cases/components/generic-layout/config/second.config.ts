import { FeatureActions } from '../enums/feature-actions';
import { SampleFeatures } from '../enums/sample-features';
import { RouteConfig } from '../interfaces/route-config';

export const secondConfig: RouteConfig = {
  label: SampleFeatures.Feature2,
  actions: [
    {
      label: 'Edit Feature 2',
      action: FeatureActions.Edit,
    },
  ],
  columns: [
    {
      label: 'ID',
      property: 'id',
    },
    {
      label: 'Second',
      property: 'second',
    },
  ],
};
