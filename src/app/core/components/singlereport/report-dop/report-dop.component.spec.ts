import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportDopComponent } from './report-dop.component';

describe('ReportDopComponent', () => {
  let component: ReportDopComponent;
  let fixture: ComponentFixture<ReportDopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
