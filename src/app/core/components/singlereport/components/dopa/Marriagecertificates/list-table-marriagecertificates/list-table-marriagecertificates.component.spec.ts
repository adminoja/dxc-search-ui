import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableMarriagecertificatesComponent } from './list-table-marriagecertificates.component';

describe('ListTableMarriagecertificatesComponent', () => {
  let component: ListTableMarriagecertificatesComponent;
  let fixture: ComponentFixture<ListTableMarriagecertificatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableMarriagecertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableMarriagecertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
