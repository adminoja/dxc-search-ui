import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelAgothChargeVictimComponent } from './dxc-model-agoth-charge-victim.component';

describe('DxcModelAgothChargeVictimComponent', () => {
  let component: DxcModelAgothChargeVictimComponent;
  let fixture: ComponentFixture<DxcModelAgothChargeVictimComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelAgothChargeVictimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelAgothChargeVictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
