import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  }, {
    path: 'login',
    redirectTo: 'account',
    pathMatch: 'full',
    data: {
      customLayout: true
    }
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  },
  {
    path: 'admin',
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',

      }, {
        path: 'dashboard',
        component: HomeComponent
      },
      {
        path: 'category',
        data: {
          title: 'Categories',
        },
        children: [
          {
            path: '',
            redirectTo: 'main',
            pathMatch: 'full'
          },
          {
            path: 'main',
            loadChildren: './categories/main-category/main-category.module#MainCategoryModule',
            data: {
              title: 'Main'
            }
          },
          {
            path: 'sub',
            loadChildren: './categories/sub-category/sub-category.module#SubCategoryModule',
            data: {
              title: 'Sub Categories'
            }
          }
        ]
      }, {
        path: 'posts',
        data: {
          title: 'Posts',
        },
        loadChildren: './posts/posts.module#PostsModule',
      }, {
        path: 'settings',
        data: {
          title: 'Settings'
        },
        loadChildren: './settings/settings.module#SettingsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
