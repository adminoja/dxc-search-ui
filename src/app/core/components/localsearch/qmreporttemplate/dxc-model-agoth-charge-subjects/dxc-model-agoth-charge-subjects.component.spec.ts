import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelAgothChargeSubjectsComponent } from './dxc-model-agoth-charge-subjects.component';

describe('DxcModelAgothChargeSubjectsComponent', () => {
  let component: DxcModelAgothChargeSubjectsComponent;
  let fixture: ComponentFixture<DxcModelAgothChargeSubjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelAgothChargeSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelAgothChargeSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
