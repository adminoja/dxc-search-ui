import { TestBed } from '@angular/core/testing';

import { SpecializedjopService } from './specializedjop.service';

describe('SpecializedjopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecializedjopService = TestBed.get(SpecializedjopService);
    expect(service).toBeTruthy();
  });
});
