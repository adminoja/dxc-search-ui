import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactAddressesComponent } from './list-contact-addresses.component';

describe('ListContactAddressesComponent', () => {
  let component: ListContactAddressesComponent;
  let fixture: ComponentFixture<ListContactAddressesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
