import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoxModule, BoxSmallModule as MkBoxSmallModule } from 'angular-admin-lte';
@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    BoxModule,
    MkBoxSmallModule
  ],
  declarations: [LoginComponent, ProfileComponent]
})
export class AccountModule { }
