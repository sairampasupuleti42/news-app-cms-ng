import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    data: {
      title: 'List'
    },
    component: ListComponent
  }, {
    path: 'add',
    data: {
      title: 'Add'
    },
    component: AddComponent
  },
  {
    path: 'edit/:id',
    data: {
      title: 'Edit'
    },
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
