import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PrisonerImagesServiceService } from './prisoner-images-service.service';

describe('PrisonerImagesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: PrisonerImagesServiceService = TestBed.get(PrisonerImagesServiceService);
    expect(service).toBeTruthy();
  });
});
