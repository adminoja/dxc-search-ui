import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DirectoryDimensionPersonService } from './directory-dimension-person.service';

describe('DirectoryDimensionPersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: DirectoryDimensionPersonService = TestBed.get(DirectoryDimensionPersonService);
    expect(service).toBeTruthy();
  });
});
