import { TestBed } from '@angular/core/testing';

import { SocialLinkedinService } from './social-linkedin.service';

describe('SocialFacebookService', () => {
  let service: SocialLinkedinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialLinkedinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
