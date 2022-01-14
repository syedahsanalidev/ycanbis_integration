import { TestBed } from '@angular/core/testing';

import { SocialFacebookService } from './social-facebook.service';

describe('SocialFacebookService', () => {
  let service: SocialFacebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialFacebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
