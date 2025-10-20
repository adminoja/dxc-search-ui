import { TestBed } from '@angular/core/testing';

import { ProbationerNarcoticsService } from './probationer-narcotics.service';

describe('ProbationerNarcoticsService', () => {
  let service: ProbationerNarcoticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProbationerNarcoticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
