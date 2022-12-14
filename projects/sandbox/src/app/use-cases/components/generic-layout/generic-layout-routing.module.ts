import { FeatureTabHeaderComponent } from './shared/feature-tab-header/feature-tab-header.component';
import { FeatureActions } from './enums/feature-actions';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleFeatures } from './enums/sample-features';
import { GenericLayoutComponent } from './generic-layout.component';
import { FEATURE_SERVICE } from './interfaces/feature.service';
import { FirstService } from './services/first.service';
import { SecondService } from './services/second.service';

const routes: Routes = [
  {
    path: '',
    component: GenericLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'first',
        pathMatch: 'full',
      },
      {
        path: 'first',
        children: [
          {
            path: '',
            loadChildren: () => import('./tabs/first-feature/first-feature.module').then(m => m.FirstFeatureModule),
          },
          {
            path: '',
            component: FeatureTabHeaderComponent,
            data: {
              actions: [
                {
                  label: 'Delete',
                  action: FeatureActions.Delete,
                },
                {
                  label: 'Edit',
                  action: FeatureActions.Edit,
                },
              ],
            },
            outlet: 'tab-header',
          },
        ],
        data: {
          label: SampleFeatures.Feature1,
        },
        providers: [{ provide: FEATURE_SERVICE, useExisting: FirstService }],
      },
      {
        path: 'second',
        children: [
          {
            path: '',
            loadChildren: () => import('./tabs/second-feature/second-feature.module').then(m => m.SecondFeatureModule),
          },
          {
            path: '',
            component: FeatureTabHeaderComponent,
            data: {
              actions: [
                {
                  label: 'Edit',
                  action: FeatureActions.Edit,
                },
              ],
            },
            outlet: 'tab-header',
          },
        ],
        data: {
          label: SampleFeatures.Feature2,
        },
        providers: [{ provide: FEATURE_SERVICE, useExisting: SecondService }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenericLayoutRoutingModule {}
