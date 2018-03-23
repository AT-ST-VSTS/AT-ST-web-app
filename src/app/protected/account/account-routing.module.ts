import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { AuthGuard } from '../../core/auth/auth-guard.service';

const authRoutes: Routes = [

  { path: 'account', component: AccountComponent, canActivate: [ AuthGuard ] },

];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
