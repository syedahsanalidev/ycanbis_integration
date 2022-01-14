import { TestBed } from '@angular/core/testing';

import { LoginUserStopToResetPasswrodGuard } from './login/user-user-stop-to-reset-passwrod.guard';

describe('LoginUserStopToResetPasswrodGuard', () => {
  let guard: LoginUserStopToResetPasswrodGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginUserStopToResetPasswrodGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
