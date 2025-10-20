import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportDocComponent } from './report-doc.component';

describe('ReportDocComponent', () => {
  let component: ReportDocComponent;
  let fixture: ComponentFixture<ReportDocComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
