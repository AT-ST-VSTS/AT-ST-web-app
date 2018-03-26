import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const errorsRoutes: Routes = [

  { path: 'not-found', component: NotFoundComponent },
  { path: '**',   redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forChild(errorsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorsRoutingModule { }
