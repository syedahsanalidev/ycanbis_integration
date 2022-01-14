import { TestBed } from '@angular/core/testing';

import { AwsCognitoAuthenticatedUserService } from './aws-cognito-authenticated-user.service';

describe('AwsCognitoAuthenticatedUserService', () => {
  let service: AwsCognitoAuthenticatedUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsCognitoAuthenticatedUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
