import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { OncbNarcoticOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListAllegationNarcoticOffenderComponent } from './list-allegation-narcotic-offender.component';

describe('ListAllegationNarcoticOffenderComponent', () => {
  let component: ListAllegationNarcoticOffenderComponent;
  let fixture: ComponentFixture<ListAllegationNarcoticOffenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllegationNarcoticOffenderComponent, FilterPipe, ConverseDatePipe ],
      imports: [ RouterTestingModule, MatDialogModule ],
      providers: [ OncbNarcoticOffenderMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllegationNarcoticOffenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
