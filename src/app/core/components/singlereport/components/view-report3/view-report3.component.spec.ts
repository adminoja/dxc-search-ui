import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ThainumberPipe } from 'src/app/core/shared/pipe/thainumber.pipe';
import { DjopJuvenileOffenderMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender/dxc-model-djop-juvenile-offender.interface';
import { DopaMoiPersonsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.interface';
import { OncbNarcoticOffenderMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';

import { ViewReport3Component } from './view-report3.component';

describe('ViewReport3Component', () => {
  let component: ViewReport3Component;
  let fixture: ComponentFixture<ViewReport3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReport3Component, ThainumberPipe ],
      providers: [DopaMoiPersonsMetadata, OncbNarcoticOffenderMetadata, DjopJuvenileOffenderMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReport3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
