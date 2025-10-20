import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ChargeVerdictServiceService } from './charge-verdict-service.service';

describe('ChargeVerdictServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: ChargeVerdictServiceService = TestBed.get(ChargeVerdictServiceService);
    expect(service).toBeTruthy();
  });
});
