import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListNormalRegisterOfTaxpayersComponent } from './list-normal-register-of-taxpayers.component';

describe('ListNormalRegisterOfTaxpayersComponent', () => {
  let component: ListNormalRegisterOfTaxpayersComponent;
  let fixture: ComponentFixture<ListNormalRegisterOfTaxpayersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalRegisterOfTaxpayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalRegisterOfTaxpayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
