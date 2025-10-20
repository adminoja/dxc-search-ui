import { TestBed } from '@angular/core/testing';

import { TrafficCaseService } from './traffic-case.service';

describe('TrafficCaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrafficCaseService = TestBed.get(TrafficCaseService);
    expect(service).toBeTruthy();
  });
});
