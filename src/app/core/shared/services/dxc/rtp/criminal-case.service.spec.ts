import { TestBed } from '@angular/core/testing';

import { CriminalCaseService } from './criminal-case.service';

describe('CriminalCaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriminalCaseService = TestBed.get(CriminalCaseService);
    expect(service).toBeTruthy();
  });
});
