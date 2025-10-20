import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AgothChargeVictimService } from './agoth-charge-victim.service';

describe('AgothChargeVictimService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: AgothChargeVictimService = TestBed.get(AgothChargeVictimService);
    expect(service).toBeTruthy();
  });
});
