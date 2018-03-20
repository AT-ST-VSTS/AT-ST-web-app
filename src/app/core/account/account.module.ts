import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { AccountService } from './account.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AccountComponent,
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
