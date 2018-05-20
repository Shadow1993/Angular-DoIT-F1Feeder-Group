import { TestBed, inject } from '@angular/core/testing';

import { TeamRacesResolverService } from './team-races-resolver.service';

describe('TeamRacesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamRacesResolverService]
    });
  });

  it('should be created', inject([TeamRacesResolverService], (service: TeamRacesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
