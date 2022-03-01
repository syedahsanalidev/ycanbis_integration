import { TestBed } from '@angular/core/testing';

import { SocialInstagramService } from './social-instagram.service';

describe('SocialFacebookService', () => {
  let service: SocialInstagramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialInstagramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
