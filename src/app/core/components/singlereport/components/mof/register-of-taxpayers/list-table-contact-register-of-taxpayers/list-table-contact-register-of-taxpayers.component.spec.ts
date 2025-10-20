import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactRegisterOfTaxpayersComponent } from './list-table-contact-register-of-taxpayers.component';

describe('ListTableContactRegisterOfTaxpayersComponent', () => {
  let component: ListTableContactRegisterOfTaxpayersComponent;
  let fixture: ComponentFixture<ListTableContactRegisterOfTaxpayersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactRegisterOfTaxpayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactRegisterOfTaxpayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
