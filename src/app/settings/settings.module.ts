import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SiteComponent } from './site/site.component';
import { BoxModule, BoxSmallModule as MkBoxSmallModule } from 'angular-admin-lte';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    BoxModule,
    CoreModule,
    MkBoxSmallModule
  ],
  declarations: [SiteComponent]
})
export class SettingsModule { }
