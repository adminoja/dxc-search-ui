import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableCareerChargeSubjectComponent } from './list-table-career-charge-subject.component';

describe('ListTableCareerChargeSubjectComponent', () => {
  let component: ListTableCareerChargeSubjectComponent;
  let fixture: ComponentFixture<ListTableCareerChargeSubjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableCareerChargeSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableCareerChargeSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
