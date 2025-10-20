import { TestBed } from '@angular/core/testing';

import { SpecializedopService } from './specializedop.service';

describe('SpecializedopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecializedopService = TestBed.get(SpecializedopService);
    expect(service).toBeTruthy();
  });
});
