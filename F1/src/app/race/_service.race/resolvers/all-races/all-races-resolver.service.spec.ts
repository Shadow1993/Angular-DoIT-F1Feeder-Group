import { TestBed, inject } from '@angular/core/testing';

import { AllRacesResolverService } from './all-races-resolver.service';

describe('AllRacesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllRacesResolverService]
    });
  });

  it('should be created', inject([AllRacesResolverService], (service: AllRacesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
