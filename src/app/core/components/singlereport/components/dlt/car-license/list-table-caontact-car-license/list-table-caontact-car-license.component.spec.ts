import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableCaontactCarLicenseComponent } from './list-table-caontact-car-license.component';

describe('ListTableCaontactCarLicenseComponent', () => {
  let component: ListTableCaontactCarLicenseComponent;
  let fixture: ComponentFixture<ListTableCaontactCarLicenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableCaontactCarLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableCaontactCarLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
