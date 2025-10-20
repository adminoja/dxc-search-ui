import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListAllegationCriminalRecordComponent } from './list-allegation-criminal-record.component';

describe('ListAllegationCriminalRecordComponent', () => {
  let component: ListAllegationCriminalRecordComponent;
  let fixture: ComponentFixture<ListAllegationCriminalRecordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllegationCriminalRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllegationCriminalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
