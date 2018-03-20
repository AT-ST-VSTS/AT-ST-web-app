import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CoreMaterialModule } from './material.module';
import { MatNativeDateModule } from '@angular/material';

import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,

    CoreMaterialModule,

    AuthModule,
    AccountModule,
    ErrorsModule
  ],
  exports: [
    CoreMaterialModule,
  ],
  declarations: [ ],
  providers: [ ]
})
export class CoreModule { }
