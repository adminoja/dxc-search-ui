import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCareerChargeSubjectComponent } from './list-career-charge-subject.component';

describe('ListCareerChargeSubjectComponent', () => {
  let component: ListCareerChargeSubjectComponent;
  let fixture: ComponentFixture<ListCareerChargeSubjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCareerChargeSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCareerChargeSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
