import { NgModule } from '@angular/core';


import { AccountModule } from './account/account.module';

@NgModule({
  imports: [
    AccountModule,
  ],
  exports: [ ],
  declarations: [ ],
  providers: [ ]
})
export class ProtectedModule { }
