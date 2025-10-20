import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableBirthcertificatesComponent } from './list-table-birthcertificates.component';

describe('ListTableBirthcertificatesComponent', () => {
  let component: ListTableBirthcertificatesComponent;
  let fixture: ComponentFixture<ListTableBirthcertificatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableBirthcertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableBirthcertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
