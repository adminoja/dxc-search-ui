import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { DocReleasedOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-released-offender/dxc-model-released-offender.interface';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListAllegationReleasedOffenderComponent } from './list-allegation-released-offender.component';

describe('ListAllegationReleasedOffenderComponent', () => {
  let component: ListAllegationReleasedOffenderComponent;
  let fixture: ComponentFixture<ListAllegationReleasedOffenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllegationReleasedOffenderComponent, FilterPipe, ConverseDatePipe ],
      imports: [ MatDialogModule ],
      providers: [ DocReleasedOffenderMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllegationReleasedOffenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
