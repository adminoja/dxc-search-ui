import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DirectoryDimensionCaseService } from './directory-dimension-case.service';

describe('DirectoryDimensionCaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: DirectoryDimensionCaseService = TestBed.get(DirectoryDimensionCaseService);
    expect(service).toBeTruthy();
  });
});
