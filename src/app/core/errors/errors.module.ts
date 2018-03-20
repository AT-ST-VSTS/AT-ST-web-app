import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';

import { ErrorsRoutingModule } from './errors-routing.module';

@NgModule({
  imports: [
    ErrorsRoutingModule
  ],
  declarations: [

    NotFoundComponent
  ]
})
export class ErrorsModule { }
