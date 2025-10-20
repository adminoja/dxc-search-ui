import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactCarLicenseComponent } from './list-contact-car-license.component';

describe('ListContactCarLicenseComponent', () => {
  let component: ListContactCarLicenseComponent;
  let fixture: ComponentFixture<ListContactCarLicenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactCarLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactCarLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
