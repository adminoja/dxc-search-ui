import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { DjopJuvenileOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender/dxc-model-djop-juvenile-offender.interface';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListAllegationJuvenileOffenderComponent } from './list-allegation-juvenile-offender.component';

describe('ListAllegationJuvenileOffenderComponent', () => {
  let component: ListAllegationJuvenileOffenderComponent;
  let fixture: ComponentFixture<ListAllegationJuvenileOffenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllegationJuvenileOffenderComponent, FilterPipe, ConverseDatePipe ],
      imports: [ RouterTestingModule, MatDialogModule ],
      providers: [DjopJuvenileOffenderMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllegationJuvenileOffenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
