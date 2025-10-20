import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableDivorceCertificatesComponent } from './list-table-divorce-certificates.component';

describe('ListTableDivorceCertificatesComponent', () => {
  let component: ListTableDivorceCertificatesComponent;
  let fixture: ComponentFixture<ListTableDivorceCertificatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableDivorceCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableDivorceCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
