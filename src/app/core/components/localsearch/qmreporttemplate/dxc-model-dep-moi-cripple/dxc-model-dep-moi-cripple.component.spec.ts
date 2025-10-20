import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelDepMoiCrippleComponent } from './dxc-model-dep-moi-cripple.component';

describe('DxcModelDepMoiCrippleComponent', () => {
  let component: DxcModelDepMoiCrippleComponent;
  let fixture: ComponentFixture<DxcModelDepMoiCrippleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelDepMoiCrippleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelDepMoiCrippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
