import { TestBed } from '@angular/core/testing';

import { ArrestWarrantsService } from './arrest-warrants.service';

describe('ArrestWarrantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrestWarrantsService = TestBed.get(ArrestWarrantsService);
    expect(service).toBeTruthy();
  });
});
