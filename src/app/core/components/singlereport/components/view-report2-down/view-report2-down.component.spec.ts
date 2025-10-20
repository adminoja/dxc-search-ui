import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ThainumberPipe } from 'src/app/core/shared/pipe/thainumber.pipe';
import { DocPrisonerMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.interface';
import { DopaMoiPersonsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.interface';

import { ViewReport2DownComponent } from './view-report2-down.component';

describe('ViewReport2DownComponent', () => {
  let component: ViewReport2DownComponent;
  let fixture: ComponentFixture<ViewReport2DownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReport2DownComponent, FilterPipe, ThainumberPipe ],
      imports: [ RouterTestingModule ],
      providers: [DopaMoiPersonsMetadata, DocPrisonerMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReport2DownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
