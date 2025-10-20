import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcModelRtpWarrantOfArrestComponent } from './dxc-model-rtp-warrant-of-arrest.component';

describe('DxcModelRtpWarrantOfArrestComponent', () => {
  let component: DxcModelRtpWarrantOfArrestComponent;
  let fixture: ComponentFixture<DxcModelRtpWarrantOfArrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcModelRtpWarrantOfArrestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelRtpWarrantOfArrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
