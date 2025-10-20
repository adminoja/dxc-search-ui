import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactBirthcertificatesComponent } from './list-table-contact-birthcertificates.component';

describe('ListTableContactBirthcertificatesComponent', () => {
  let component: ListTableContactBirthcertificatesComponent;
  let fixture: ComponentFixture<ListTableContactBirthcertificatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactBirthcertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactBirthcertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
