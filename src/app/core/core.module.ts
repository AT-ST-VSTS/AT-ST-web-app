import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MatNativeDateModule } from '@angular/material';

import { ErrorsModule } from './errors/errors.module';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { CoreAngularModule } from './CoreAngular.module';
import { CoreMaterialModule } from './CoreMaterial.module';

@NgModule({
  imports: [

    CoreAngularModule,
    CoreMaterialModule,

    AuthModule,
    ErrorsModule
  ],
  exports: [
    CoreMaterialModule,
  ],
  declarations: [ ],
  providers: [ ]
})
export class CoreModule { }
