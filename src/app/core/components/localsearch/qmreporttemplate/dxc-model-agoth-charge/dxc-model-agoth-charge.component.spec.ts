import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelAgothChargeComponent } from './dxc-model-agoth-charge.component';

describe('DxcModelAgothChargeComponent', () => {
  let component: DxcModelAgothChargeComponent;
  let fixture: ComponentFixture<DxcModelAgothChargeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelAgothChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelAgothChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
