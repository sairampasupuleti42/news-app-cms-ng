import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { ListComponent } from './list/list.component';

import { BoxModule, BoxSmallModule as MkBoxSmallModule } from 'angular-admin-lte';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    BoxModule,
    CoreModule,
    MkBoxSmallModule
  ],
  declarations: [ListComponent, AddComponent, EditComponent]
})
export class PostsModule { }
