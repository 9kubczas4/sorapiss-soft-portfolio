import { FeatureActions } from '../enums/feature-actions';
import { Tabs } from '../enums/tabs';
import { RouteConfig } from '../interfaces/route-config';
import { Album } from '../interfaces/ui/album';

export const albumsConfig: RouteConfig<Album> = {
  label: Tabs.Albums,
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
      label: 'Title',
      property: 'title',
    },
  ],
};
