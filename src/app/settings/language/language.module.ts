import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageRoutingModule } from './language-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { BoxModule, BoxSmallModule as MkBoxSmallModule } from 'angular-admin-lte';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    LanguageRoutingModule, BoxModule,MkBoxSmallModule,CoreModule
  ],
  declarations: [ListComponent, EditComponent, AddComponent]
})
export class LanguageModule { }
