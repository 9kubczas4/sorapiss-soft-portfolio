import { FeatureTabHeaderComponent } from './shared/feature-tab-header/feature-tab-header.component';
import { FeatureActions } from './enums/feature-actions';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleFeatures } from './enums/sample-features';
import { GenericLayoutComponent } from './generic-layout.component';
import { FEATURE_SERVICE } from './interfaces/feature.service';
import { FirstService } from './services/first.service';
import { SecondService } from './services/second.service';
import { ThirdService } from './services/third.service';
import { SelectionService } from './services/selection.service';
import { ActionsService } from './services/actions.service';

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
            outlet: 'tab-header',
          },
        ],
        data: {
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
        },
        providers: [{ provide: FEATURE_SERVICE, useClass: FirstService }, SelectionService, ActionsService],
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
            outlet: 'tab-header',
          },
        ],
        data: {
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
        },
        providers: [{ provide: FEATURE_SERVICE, useClass: SecondService }, SelectionService, ActionsService],
      },
      {
        path: 'third',
        children: [
          {
            path: '',
            loadChildren: () => import('./tabs/third-feature/third-feature.module').then(m => m.ThirdFeatureModule),
          },
          {
            path: '',
            component: FeatureTabHeaderComponent,
            outlet: 'tab-header',
          },
        ],
        data: {
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
        },
        providers: [{ provide: FEATURE_SERVICE, useClass: ThirdService }, SelectionService, ActionsService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenericLayoutRoutingModule {}
