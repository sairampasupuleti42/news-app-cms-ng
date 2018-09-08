import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }, {
    path: 'list',
    component: ListComponent,
    data: {
      title: 'List'
    }
  }
  , {
    path: 'add',
    component: AddComponent,
    data: {
      title: 'Add'
    }
  }
  , {
    path: 'edit/:id',
    component: EditComponent, 
     data: {
      title: 'Edit'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageRoutingModule { }
