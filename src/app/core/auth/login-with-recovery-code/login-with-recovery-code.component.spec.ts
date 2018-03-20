import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithRecoveryCodeComponent } from './login-with-recovery-code.component';

describe('LoginWithRecoveryCodeComponent', () => {
  let component: LoginWithRecoveryCodeComponent;
  let fixture: ComponentFixture<LoginWithRecoveryCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithRecoveryCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithRecoveryCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
