import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { DocPrisonerMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.interface';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListAlgationsPrisonerComponent } from './list-algations-prisoner.component';

describe('ListAlgationsPrisonerComponent', () => {
  let component: ListAlgationsPrisonerComponent;
  let fixture: ComponentFixture<ListAlgationsPrisonerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAlgationsPrisonerComponent, FilterPipe, ConverseDatePipe ],
      imports: [ RouterTestingModule, MatDialogModule ],
      providers: [DocPrisonerMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlgationsPrisonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
