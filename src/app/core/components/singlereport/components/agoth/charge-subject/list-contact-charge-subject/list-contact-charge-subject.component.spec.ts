import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactChargeSubjectComponent } from './list-contact-charge-subject.component';

describe('ListContactChargeSubjectComponent', () => {
  let component: ListContactChargeSubjectComponent;
  let fixture: ComponentFixture<ListContactChargeSubjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactChargeSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactChargeSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
