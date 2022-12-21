import { FeatureActions } from '../enums/feature-actions';
import { SampleFeatures } from '../enums/sample-features';
import { RouteConfig } from './../interfaces/route-config';

export const firstConfig: RouteConfig = {
  label: SampleFeatures.Feature1,
  actions: [
    {
      label: 'Delete',
      action: FeatureActions.Delete,
    },
    {
      label: 'Edit Feature 1',
      action: FeatureActions.Edit,
    },
  ],
  columns: [
    {
      label: 'ID',
      property: 'id',
    },
    {
      label: 'First',
      property: 'first',
    },
  ],
};
