import { TestBed } from '@angular/core/testing';

import { JuvenileOffender65Service } from './juvenile-offender65.service';

describe('JuvenileOffender65Service', () => {
  let service: JuvenileOffender65Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuvenileOffender65Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
