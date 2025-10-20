import { TestBed } from '@angular/core/testing';

import { FactFindingReportService } from './fact-finding-report.service';

describe('FactFindingReportService', () => {
  let service: FactFindingReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactFindingReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
