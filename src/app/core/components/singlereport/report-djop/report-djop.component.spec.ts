import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportDjopComponent } from './report-djop.component';

describe('ReportDjopComponent', () => {
  let component: ReportDjopComponent;
  let fixture: ComponentFixture<ReportDjopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDjopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDjopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
