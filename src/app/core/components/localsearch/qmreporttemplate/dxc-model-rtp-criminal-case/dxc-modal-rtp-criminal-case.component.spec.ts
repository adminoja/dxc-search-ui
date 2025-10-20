import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModalRtpCriminalCaseComponent } from './dxc-modal-rtp-criminal-case.component';

describe('DxcModalRtpCriminalCaseComponent', () => {
  let component: DxcModalRtpCriminalCaseComponent;
  let fixture: ComponentFixture<DxcModalRtpCriminalCaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModalRtpCriminalCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModalRtpCriminalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
