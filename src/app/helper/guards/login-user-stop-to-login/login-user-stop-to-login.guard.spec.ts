import { TestBed } from '@angular/core/testing';

import { LoginUserStopToLoginGuard } from './login/user-user-stop-to-login.guard';

describe('LoginUserStopToLoginGuard', () => {
  let guard: LoginUserStopToLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginUserStopToLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
