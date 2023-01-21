import { FeatureActions } from '../enums/feature-actions';
import { Tabs } from '../enums/tabs';
import { RouteConfig } from '../interfaces/route-config';
import { User } from '../interfaces/ui/user';

export const usersConfig: RouteConfig<User> = {
  label: Tabs.Users,
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
      label: 'Name',
      property: 'name',
    },
    {
      label: 'Username',
      property: 'username',
    },
    {
      label: 'Email',
      property: 'email',
    },
    {
      label: 'Phone',
      property: 'phone',
    },
    {
      label: 'Website',
      property: 'website',
    },
    {
      label: 'City',
      property: 'city',
    },
    {
      label: 'Company',
      property: 'company',
    },
  ],
};
