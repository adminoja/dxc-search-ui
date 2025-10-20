import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListLeftRegisterOfTaxpayersComponent } from './list-left-register-of-taxpayers.component';

describe('ListLeftRegisterOfTaxpayersComponent', () => {
  let component: ListLeftRegisterOfTaxpayersComponent;
  let fixture: ComponentFixture<ListLeftRegisterOfTaxpayersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftRegisterOfTaxpayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftRegisterOfTaxpayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
