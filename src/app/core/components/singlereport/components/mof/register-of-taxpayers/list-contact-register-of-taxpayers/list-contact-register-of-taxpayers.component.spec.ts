import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactRegisterOfTaxpayersComponent } from './list-contact-register-of-taxpayers.component';

describe('ListContactRegisterOfTaxpayersComponent', () => {
  let component: ListContactRegisterOfTaxpayersComponent;
  let fixture: ComponentFixture<ListContactRegisterOfTaxpayersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactRegisterOfTaxpayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactRegisterOfTaxpayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
