import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BoxModule, TabsModule, DropdownModule } from 'angular-admin-lte';

import { HeaderInnerComponent } from './header-inner/header-inner.component';
import { SidebarLeftInnerComponent } from './sidebar-left-inner/sidebar-left-inner.component';
import { SidebarRightInnerComponent } from './sidebar-right-inner/sidebar-right-inner.component';
import { RouterModule } from '@angular/router';
import { TagInputModule } from 'ngx-chips';
import { NgxTinymceModule } from 'ngx-tinymce';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    DropdownModule,
    TabsModule,
    BoxModule,
    TagInputModule,
    
    NgxTinymceModule.forRoot({
      baseURL: '//cdn.bootcss.com/tinymce/4.7.13/',
    })
  ],
  declarations: [HeaderInnerComponent, SidebarLeftInnerComponent, SidebarRightInnerComponent],
  exports: [
    ReactiveFormsModule,
     FormsModule,
     NgxTinymceModule,
     TagInputModule,
      BoxModule,
       TabsModule,
     
        HeaderInnerComponent,
         SidebarLeftInnerComponent,
          SidebarRightInnerComponent]
})
export class CoreModule { }
