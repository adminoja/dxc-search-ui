import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTopReportPersonsComponent } from './list-top-report-persons.component';

describe('ListTopReportPersonsComponent', () => {
  let component: ListTopReportPersonsComponent;
  let fixture: ComponentFixture<ListTopReportPersonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTopReportPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopReportPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
