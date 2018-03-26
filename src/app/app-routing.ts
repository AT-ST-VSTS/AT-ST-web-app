import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthGuard } from './core/auth/auth-guard.service';

// import { CanDeactivateGuard } from './can-deactivate-guard.service';
// import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
    { path: '',   component: AppComponent },

    // https://angular.io/guide/router#canload-guard-guarding-unauthorized-loading-of-feature-modules
    // { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canLoad: [ AuthGuard ] },

    // https://angular.io/guide/router#custom-preloading-strategy
    // { path: 'stuff', loadChildren: 'app/stuff/stuff.module#StuffModule', data: { preload: true } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
