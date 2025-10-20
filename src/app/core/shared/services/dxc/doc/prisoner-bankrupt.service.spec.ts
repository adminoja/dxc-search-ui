import { TestBed } from '@angular/core/testing';

import { PrisonerBankruptService } from './prisoner-bankrupt.service';

describe('PrisonerBankruptService', () => {
  let service: PrisonerBankruptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrisonerBankruptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
