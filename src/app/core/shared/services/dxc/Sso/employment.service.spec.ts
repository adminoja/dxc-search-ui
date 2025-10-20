import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EmploymentService } from './employment.service';

describe('EmploymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: EmploymentService = TestBed.get(EmploymentService);
    expect(service).toBeTruthy();
  });
});
