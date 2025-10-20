import { TestBed } from '@angular/core/testing';

import { JudgementSummarysService } from './judgement-summarys.service';

describe('JudgementSummarysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JudgementSummarysService = TestBed.get(JudgementSummarysService);
    expect(service).toBeTruthy();
  });
});
