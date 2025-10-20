import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ChargeSubjectService } from './charge-subject.service';

describe('ChargeSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: ChargeSubjectService = TestBed.get(ChargeSubjectService);
    expect(service).toBeTruthy();
  });
});
