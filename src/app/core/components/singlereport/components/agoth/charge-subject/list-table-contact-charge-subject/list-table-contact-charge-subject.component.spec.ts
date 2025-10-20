import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactChargeSubjectComponent } from './list-table-contact-charge-subject.component';

describe('ListTableContactChargeSubjectComponent', () => {
  let component: ListTableContactChargeSubjectComponent;
  let fixture: ComponentFixture<ListTableContactChargeSubjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactChargeSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactChargeSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
