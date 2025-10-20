import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelMofRegisterOfTaxpayersComponent } from './dxc-model-mof-register-of-taxpayers.component';

describe('DxcModelMofRegisterOfTaxpayersComponent', () => {
  let component: DxcModelMofRegisterOfTaxpayersComponent;
  let fixture: ComponentFixture<DxcModelMofRegisterOfTaxpayersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelMofRegisterOfTaxpayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelMofRegisterOfTaxpayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
