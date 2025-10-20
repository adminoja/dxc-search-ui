import { TestBed } from '@angular/core/testing';

import { AbsolutePrisonerInformationBeforeReleaseOnProbationService } from './absolute-prisoner-information-before-release-on-probation.service';

describe('AbsolutePrisonerInformationBeforeReleaseOnProbationService', () => {
  let service: AbsolutePrisonerInformationBeforeReleaseOnProbationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbsolutePrisonerInformationBeforeReleaseOnProbationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
