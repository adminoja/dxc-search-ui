import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ReleasedPrisonersServiceService } from './released-prisoners-service.service';

describe('ReleasedPrisonersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: ReleasedPrisonersServiceService = TestBed.get(ReleasedPrisonersServiceService);
    expect(service).toBeTruthy();
  });
});
