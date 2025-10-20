import { TestBed } from '@angular/core/testing';

import { RegisterOfTaxpayersService } from './register-of-taxpayers.service';

describe('RegisterOfTaxpayersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterOfTaxpayersService = TestBed.get(RegisterOfTaxpayersService);
    expect(service).toBeTruthy();
  });
});
