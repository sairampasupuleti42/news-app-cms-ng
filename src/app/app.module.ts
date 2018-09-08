import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    // ReactiveFormsModule,
    // FormsModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  exports:[BrowserAnimationsModule]
})
export class AppModule { }
