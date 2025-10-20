import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableCarLicenseComponent } from './list-table-car-license.component';

describe('ListTableCarLicenseComponent', () => {
  let component: ListTableCarLicenseComponent;
  let fixture: ComponentFixture<ListTableCarLicenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableCarLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableCarLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
