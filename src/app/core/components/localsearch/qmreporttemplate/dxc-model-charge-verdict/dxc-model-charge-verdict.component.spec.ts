import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelChargeVerdictComponent } from './dxc-model-charge-verdict.component';

describe('DxcModelChargeVerdictComponent', () => {
  let component: DxcModelChargeVerdictComponent;
  let fixture: ComponentFixture<DxcModelChargeVerdictComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelChargeVerdictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelChargeVerdictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
