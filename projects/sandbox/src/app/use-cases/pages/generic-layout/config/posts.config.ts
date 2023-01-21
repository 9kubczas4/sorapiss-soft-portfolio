import { FeatureActions } from '../enums/feature-actions';
import { Tabs } from '../enums/tabs';
import { RouteConfig } from '../interfaces/route-config';
import { Post } from '../interfaces/ui/post';

export const postsConfig: RouteConfig<Post> = {
  label: Tabs.Posts,
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
      label: 'Title',
      property: 'title',
    },
    {
      label: 'Body',
      property: 'body',
    },
  ],
};
