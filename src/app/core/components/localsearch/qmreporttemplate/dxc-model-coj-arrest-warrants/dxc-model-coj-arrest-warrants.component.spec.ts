import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelCojArrestWarrantsComponent } from './dxc-model-coj-arrest-warrants.component';

describe('DxcModelCojArrestWarrantsComponent', () => {
  let component: DxcModelCojArrestWarrantsComponent;
  let fixture: ComponentFixture<DxcModelCojArrestWarrantsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelCojArrestWarrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelCojArrestWarrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
