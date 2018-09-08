import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainCategoryRoutingModule } from './main-category-routing.module';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { BoxModule, BoxSmallModule as MkBoxSmallModule } from 'angular-admin-lte';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    MainCategoryRoutingModule,
    BoxModule,
    CoreModule,
    MkBoxSmallModule
  ],
  declarations: [EditComponent, AddComponent, ListComponent],

})
export class MainCategoryModule { }
