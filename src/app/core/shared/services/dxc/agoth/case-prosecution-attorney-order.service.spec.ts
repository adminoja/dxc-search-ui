import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CaseProsecutionAttorneyOrderService } from './case-prosecution-attorney-order.service';

describe('CaseProsecutionAttorneyOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: CaseProsecutionAttorneyOrderService = TestBed.get(CaseProsecutionAttorneyOrderService);
    expect(service).toBeTruthy();
  });
});
