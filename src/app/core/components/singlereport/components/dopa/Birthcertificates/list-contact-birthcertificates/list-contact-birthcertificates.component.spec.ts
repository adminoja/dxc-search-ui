import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactBirthcertificatesComponent } from './list-contact-birthcertificates.component';

describe('ListContactBirthcertificatesComponent', () => {
  let component: ListContactBirthcertificatesComponent;
  let fixture: ComponentFixture<ListContactBirthcertificatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactBirthcertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactBirthcertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
