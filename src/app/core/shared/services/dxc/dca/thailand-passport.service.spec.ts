import { TestBed } from '@angular/core/testing';

import { ThailandPassportService } from './thailand-passport.service';

describe('ThailandPassportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThailandPassportService = TestBed.get(ThailandPassportService);
    expect(service).toBeTruthy();
  });
});
