import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { CifsReportVerificationMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-cifs-report-verification/dxc-model-cifs-report-verification.interface';
import { ChangeDatePipe } from 'src/app/core/shared/pipe/change-date.pipe';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalReportVerificationComponent } from './list-normal-report-verification.component';

describe('ListNormalReportVerificationComponent', () => {
  let component: ListNormalReportVerificationComponent;
  let fixture: ComponentFixture<ListNormalReportVerificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalReportVerificationComponent, FilterPipe, ChangeDatePipe ],
      imports: [ MatDialogModule ],
      providers: [ CifsReportVerificationMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalReportVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
