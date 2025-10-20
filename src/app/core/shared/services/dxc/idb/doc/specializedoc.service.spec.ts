import { TestBed } from '@angular/core/testing';

import { SpecializedocService } from './specializedoc.service';

describe('SpecializedocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecializedocService = TestBed.get(SpecializedocService);
    expect(service).toBeTruthy();
  });
});
