import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SelectedHospitalService } from './selected-hospital.service';

describe('SelectHotpitalService', () => {
  let service: SelectedHospitalService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
