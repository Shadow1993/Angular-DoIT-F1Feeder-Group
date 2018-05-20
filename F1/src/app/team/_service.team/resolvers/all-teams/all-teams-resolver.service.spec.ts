import { TestBed, inject } from '@angular/core/testing';

import { AllTeamsResolverService } from './all-teams-resolver.service';

describe('AllRacesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllTeamsResolverService]
    });
  });

  it('should be created', inject([AllTeamsResolverService], (service: AllTeamsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
