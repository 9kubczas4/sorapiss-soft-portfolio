import { FeatureActions } from '../enums/feature-actions';

export interface Action {
  label: string;
  action: FeatureActions;
}
