import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AttorneySubcaseServiceService } from './attorney-subcase-service.service';

describe('AttorneySubcaseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: AttorneySubcaseServiceService = TestBed.get(AttorneySubcaseServiceService);
    expect(service).toBeTruthy();
  });
});
