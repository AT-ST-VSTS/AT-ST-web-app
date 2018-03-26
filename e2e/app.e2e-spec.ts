import { AppPage } from './app.po';
import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../src/app/app-routing';
import { APP_BASE_HREF } from '@angular/common';
import { AuthGuard } from '../src/app/core/auth/auth-guard.service';

describe('at-st-vsts App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();

    // TestBed.configureTestingModule({
    //   declarations: [
    //   ],
    //   imports: [
    //     AppRoutingModule,
    //   ],
    //   providers: [
    //     // { provide: AuthGuard, useValue: authGuardStub },
    //     { provide: APP_BASE_HREF, useValue: '/' }
    //   ]
    // }).compileComponents();

  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to app!');
  // });
});
