import { TestBed, inject } from '@angular/core/testing';

import { QualifierResolverService } from './qualifier-resolver.service';

describe('QualifierResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QualifierResolverService]
    });
  });

  it('should be created', inject([QualifierResolverService], (service: QualifierResolverService) => {
    expect(service).toBeTruthy();
  }));
});
