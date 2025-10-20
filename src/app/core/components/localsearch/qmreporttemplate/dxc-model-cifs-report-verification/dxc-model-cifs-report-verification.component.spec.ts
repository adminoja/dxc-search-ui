import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelCifsReportVerificationComponent } from './dxc-model-cifs-report-verification.component';

describe('DxcModelCifsReportVerificationComponent', () => {
  let component: DxcModelCifsReportVerificationComponent;
  let fixture: ComponentFixture<DxcModelCifsReportVerificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelCifsReportVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelCifsReportVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
