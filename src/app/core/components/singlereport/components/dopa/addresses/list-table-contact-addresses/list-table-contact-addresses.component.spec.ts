import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactAddressesComponent } from './list-table-contact-addresses.component';

describe('ListTableContactAddressesComponent', () => {
  let component: ListTableContactAddressesComponent;
  let fixture: ComponentFixture<ListTableContactAddressesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
