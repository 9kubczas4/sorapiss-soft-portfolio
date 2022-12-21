import { SampleFeatures } from './../enums/sample-features';
import { Action } from './action';
import { Column } from './column';

export interface RouteConfig {
  label: SampleFeatures;
  actions: Action[];
  columns: Column[];
}
