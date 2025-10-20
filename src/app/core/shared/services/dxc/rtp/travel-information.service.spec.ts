import { TestBed } from '@angular/core/testing';

import { TravelInformationService } from './travel-information.service';

describe('TravelInformationService', () => {
  let service: TravelInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
