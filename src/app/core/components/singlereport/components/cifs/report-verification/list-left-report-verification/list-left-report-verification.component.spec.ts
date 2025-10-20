import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CifsReportVerificationMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-cifs-report-verification/dxc-model-cifs-report-verification.interface';

import { ListLeftReportVerificationComponent } from './list-left-report-verification.component';

describe('ListLeftReportVerificationComponent', () => {
  let component: ListLeftReportVerificationComponent;
  let fixture: ComponentFixture<ListLeftReportVerificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftReportVerificationComponent ],
      providers: [ CifsReportVerificationMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftReportVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
