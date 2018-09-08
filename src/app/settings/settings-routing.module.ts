import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteComponent } from './site/site.component';
import { ListComponent } from './language/list/list.component';
import { LanguageModule } from './language/language.module';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'site',
    pathMatch: 'full'
  },
  {
    path: 'site',
    component: SiteComponent
  }, {
    path: 'language',
    loadChildren: './language/language.module#LanguageModule',
    data:{
      title:'Languages'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
