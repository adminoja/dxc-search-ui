import { TestBed } from '@angular/core/testing';

import { WarrantOfArrestService } from './warrant-of-arrest.service';

describe('WarrantOfArrestService', () => {
  let service: WarrantOfArrestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarrantOfArrestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
