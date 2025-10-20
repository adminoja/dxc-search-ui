import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableAddressesComponent } from './list-table-addresses.component';

describe('ListTableAddressesComponent', () => {
  let component: ListTableAddressesComponent;
  let fixture: ComponentFixture<ListTableAddressesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
