import { TestBed } from '@angular/core/testing';

import { ThaiDService } from './thai-d.service';

describe('ThaiDService', () => {
  let service: ThaiDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThaiDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
