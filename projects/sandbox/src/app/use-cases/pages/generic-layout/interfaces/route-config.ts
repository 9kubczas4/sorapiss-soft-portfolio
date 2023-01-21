import { Tabs } from '../enums/tabs';
import { Action } from './action';
import { Column } from './column';

export interface RouteConfig<T> {
  label: Tabs;
  actions: Action[];
  columns: Array<Column<T>>;
}
