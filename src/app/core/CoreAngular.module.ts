import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        HttpClientModule,
    ]
})
export class CoreAngularModule {}
