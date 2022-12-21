import { FeatureTabHeaderComponent } from './shared/feature-tab-header/feature-tab-header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericLayoutComponent } from './generic-layout.component';
import { FEATURE_SERVICE } from './interfaces/feature.service';
import { UsersService } from './services/users.service';
import { AlbumsService } from './services/albums.service';
import { PostsService } from './services/posts.service';
import { SelectionService } from './services/selection.service';
import { ActionsService } from './services/actions.service';
import { usersConfig } from './config/users.config';
import { albumsConfig } from './config/albums.config';
import { postsConfig } from './config/posts.config';

const routes: Routes = [
  {
    path: '',
    component: GenericLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: 'users',
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
        data: usersConfig,
        providers: [{ provide: FEATURE_SERVICE, useClass: UsersService }, SelectionService, ActionsService],
      },
      {
        path: 'albums',
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
        data: albumsConfig,
        providers: [{ provide: FEATURE_SERVICE, useClass: AlbumsService }, SelectionService, ActionsService],
      },
      {
        path: 'posts',
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
        data: postsConfig,
        providers: [{ provide: FEATURE_SERVICE, useClass: PostsService }, SelectionService, ActionsService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenericLayoutRoutingModule {}
