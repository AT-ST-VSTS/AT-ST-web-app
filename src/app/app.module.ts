
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
