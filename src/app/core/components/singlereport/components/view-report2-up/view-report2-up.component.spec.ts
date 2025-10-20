import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DopaMoiPersonsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.interface';
import { OncbNarcoticOffenderMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';

import { ViewReport2UpComponent } from './view-report2-up.component';

describe('ViewReport2UpComponent', () => {
  let component: ViewReport2UpComponent;
  let fixture: ComponentFixture<ViewReport2UpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReport2UpComponent ],
      providers: [DopaMoiPersonsMetadata, OncbNarcoticOffenderMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReport2UpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
