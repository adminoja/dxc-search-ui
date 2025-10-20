import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListAllegationCriminalCaseComponent } from './list-allegation-criminal-case.component';

describe('ListAllegationCriminalComponent', () => {
  let component: ListAllegationCriminalCaseComponent;
  let fixture: ComponentFixture<ListAllegationCriminalCaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllegationCriminalCaseComponent, FilterPipe, ConverseDatePipe ],
      imports: [ MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllegationCriminalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
