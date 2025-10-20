import { TestBed } from '@angular/core/testing';

import { CrippleService } from './cripple.service';

describe('CrippleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrippleService = TestBed.get(CrippleService);
    expect(service).toBeTruthy();
  });
});
