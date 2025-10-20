import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListLeftCriminalRecordComponent } from './list-left-criminal-record.component';

describe('ListLeftCriminalRecordComponent', () => {
  let component: ListLeftCriminalRecordComponent;
  let fixture: ComponentFixture<ListLeftCriminalRecordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftCriminalRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftCriminalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
