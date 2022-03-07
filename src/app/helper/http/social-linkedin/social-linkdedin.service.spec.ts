import { TestBed } from '@angular/core/testing';

import { SocialLinkdedinService } from './social-linkdedin.service';

describe('SocialLinkdedinService', () => {
  let service: SocialLinkdedinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialLinkdedinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
