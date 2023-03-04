import { FeatureTabHeaderComponent } from './shared/feature-tab-header/feature-tab-header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericLayoutComponent } from './generic-layout.component';
import { FEATURE_SERVICE } from './interfaces/feature.service';
import { UsersService } from './tabs/users/users.service';
import { AlbumsService } from './tabs/albums/albums.service';
import { PostsService } from './tabs/posts/posts.service';
import { SelectionService } from './services/selection.service';
import { ActionsService } from './services/actions.service';
import { usersConfig } from './config/users.config';
import { albumsConfig } from './config/albums.config';
import { postsConfig } from './config/posts.config';
import { Tabs } from './enums/tabs';
import { UrlService } from './services/url.service';

const routes: Routes = [
  {
    path: '',
    component: GenericLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: Tabs.Users,
        pathMatch: 'full',
      },
      {
        path: Tabs.Users,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./tabs/users/users.module').then((m) => m.UsersModule),
          },
          {
            path: '',
            component: FeatureTabHeaderComponent,
            outlet: 'tab-header',
          },
        ],
        data: usersConfig,
        providers: [
          { provide: FEATURE_SERVICE, useClass: UsersService },
          SelectionService,
          ActionsService,
        ],
      },
      {
        path: Tabs.Albums,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./tabs/albums/albums.module').then((m) => m.AlbumsModule),
          },
          {
            path: '',
            component: FeatureTabHeaderComponent,
            outlet: 'tab-header',
          },
        ],
        data: albumsConfig,
        providers: [
          { provide: FEATURE_SERVICE, useClass: AlbumsService },
          SelectionService,
          ActionsService,
        ],
      },
      {
        path: Tabs.Posts,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./tabs/posts/posts.module').then((m) => m.PostsModule),
          },
          {
            path: '',
            component: FeatureTabHeaderComponent,
            outlet: 'tab-header',
          },
        ],
        data: postsConfig,
        providers: [
          { provide: FEATURE_SERVICE, useClass: PostsService },
          SelectionService,
          ActionsService,
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UrlService],
})
export class GenericLayoutRoutingModule {}
