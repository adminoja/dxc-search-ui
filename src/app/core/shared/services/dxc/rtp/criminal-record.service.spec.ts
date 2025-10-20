import { TestBed } from '@angular/core/testing';

import { CriminalRecordService } from './criminal-record.service';

describe('CriminalRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriminalRecordService = TestBed.get(CriminalRecordService);
    expect(service).toBeTruthy();
  });
});
