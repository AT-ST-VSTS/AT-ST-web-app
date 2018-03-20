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

import { AuthRoutingModule } from './auth-routing.module';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CoreMaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material';


@NgModule({
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,

    CoreMaterialModule,

    AuthRoutingModule,

  ],
  declarations: [

    LoginComponent,
    LoginExternalComponent,
    LoginWithTwoFactorComponent,
    LoginWithRecoveryCodeComponent,
    LogoutComponent,
    RegisterComponent,
    ConfirmEmailComponent,
    PasswordResetComponent,
    PasswordForgotComponent,
    AccessDeniedComponent,
    LockoutComponent,

  ],
  providers: [

    AuthService,
    AuthGuard

  ]
})
export class AuthModule { }
