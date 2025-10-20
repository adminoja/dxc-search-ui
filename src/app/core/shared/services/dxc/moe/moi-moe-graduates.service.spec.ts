import { TestBed } from '@angular/core/testing';

import { MoiMoeGraduatesService } from './moi-moe-graduates.service';

describe('MoiMoeGraduatesService', () => {
  let service: MoiMoeGraduatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoiMoeGraduatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
