import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginExternalComponent } from './login-external/login-external.component';
import { LoginWithTwoFactorComponent } from './login-with-two-factor/login-with-two-factor.component';
import { LoginWithRecoveryCodeComponent } from './login-with-recovery-code/login-with-recovery-code.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { LockoutComponent } from './lockout/lockout.component';

import { AuthGuard } from './auth-guard.service';

const authRoutes: Routes = [

  { path: 'logout', redirectTo: '/auth/logout', pathMatch: 'full' },
  { path: 'login',  redirectTo: '/auth/login', pathMatch: 'full' },

  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/login-with-recovery-code', component: LoginWithRecoveryCodeComponent },
  { path: 'auth/login-with-two-factor', component: LoginWithTwoFactorComponent },
  { path: 'auth/login-external', component: LoginExternalComponent },
  { path: 'auth/logout', component: LogoutComponent, canActivate: [ AuthGuard ] },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/confirm-email', component: ConfirmEmailComponent },
  { path: 'auth/password-reset', component: PasswordResetComponent },
  { path: 'auth/password-forgot', component: PasswordForgotComponent },
  { path: 'access-denied',  component: AccessDeniedComponent },
  { path: 'auth/lockout', component: LockoutComponent },

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
