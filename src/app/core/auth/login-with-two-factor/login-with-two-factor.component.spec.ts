import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithTwoFactorComponent } from './login-with-two-factor.component';

describe('Loginwith-two-factorComponent', () => {
  let component: LoginWithTwoFactorComponent;
  let fixture: ComponentFixture<LoginWithTwoFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithTwoFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithTwoFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
