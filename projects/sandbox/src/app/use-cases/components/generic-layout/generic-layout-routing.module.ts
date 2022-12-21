import { FeatureTabHeaderComponent } from './shared/feature-tab-header/feature-tab-header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericLayoutComponent } from './generic-layout.component';
import { FEATURE_SERVICE } from './interfaces/feature.service';
import { FirstService } from './services/first.service';
import { SecondService } from './services/second.service';
import { ThirdService } from './services/third.service';
import { SelectionService } from './services/selection.service';
import { ActionsService } from './services/actions.service';
import { firstConfig } from './config/first.config';
import { secondConfig } from './config/second.config';
import { thirdConfig } from './config/third.config';

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
        data: firstConfig,
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
        data: secondConfig,
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
        data: thirdConfig,
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
