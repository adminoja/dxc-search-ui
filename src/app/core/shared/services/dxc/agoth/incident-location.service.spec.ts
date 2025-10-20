import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { IncidentLocationService } from './incident-location.service';

describe('IncidentLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: IncidentLocationService = TestBed.get(IncidentLocationService);
    expect(service).toBeTruthy();
  });
});
