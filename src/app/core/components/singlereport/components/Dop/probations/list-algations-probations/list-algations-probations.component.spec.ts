import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DopProbationerMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dop-probationer/dxc-model-dop-probationer.interface';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListAlgationsProbationsComponent } from './list-algations-probations.component';

describe('ListAlgationsProbationsComponent', () => {
  let component: ListAlgationsProbationsComponent;
  let fixture: ComponentFixture<ListAlgationsProbationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAlgationsProbationsComponent, FilterPipe, ConverseDatePipe ],
      imports: [ MatDialogModule ],
      providers: [DopProbationerMetadata, MatDialog]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlgationsProbationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
