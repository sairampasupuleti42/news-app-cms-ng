import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCategoryRoutingModule } from './sub-category-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { BoxModule, BoxSmallModule as MkBoxSmallModule } from 'angular-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    SubCategoryRoutingModule,
    BoxModule,
    MkBoxSmallModule
  ],
  declarations: [ListComponent, AddComponent, EditComponent]
})
export class SubCategoryModule { }
