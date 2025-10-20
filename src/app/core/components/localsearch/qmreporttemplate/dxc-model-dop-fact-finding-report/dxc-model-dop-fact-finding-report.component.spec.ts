import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcModelDopFactFindingReportComponent } from './dxc-model-dop-fact-finding-report.component';

describe('DxcModelDopFactFindingReportComponent', () => {
  let component: DxcModelDopFactFindingReportComponent;
  let fixture: ComponentFixture<DxcModelDopFactFindingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcModelDopFactFindingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelDopFactFindingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
