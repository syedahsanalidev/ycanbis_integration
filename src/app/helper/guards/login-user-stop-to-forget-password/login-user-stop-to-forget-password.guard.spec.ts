import { TestBed } from '@angular/core/testing';

import { LoginUserStopToForgetPasswordGuard } from './login/user-user-stop-to-forget-password.guard';

describe('LoginUserStopToForgetPasswordGuard', () => {
  let guard: LoginUserStopToForgetPasswordGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginUserStopToForgetPasswordGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
