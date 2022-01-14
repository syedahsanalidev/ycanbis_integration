import { TestBed } from '@angular/core/testing';

import { LoginUserStopToRegisterGuard } from './login/user-user-stop-to-register.guard';

describe('LoginUserStopToRegisterGuard', () => {
  let guard: LoginUserStopToRegisterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginUserStopToRegisterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
