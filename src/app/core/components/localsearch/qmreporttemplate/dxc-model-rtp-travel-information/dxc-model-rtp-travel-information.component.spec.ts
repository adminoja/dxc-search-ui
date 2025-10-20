import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcModelRtpTravelInformationComponent } from './dxc-model-rtp-travel-information.component';

describe('DxcModelRtpTravelInformationComponent', () => {
  let component: DxcModelRtpTravelInformationComponent;
  let fixture: ComponentFixture<DxcModelRtpTravelInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcModelRtpTravelInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelRtpTravelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
