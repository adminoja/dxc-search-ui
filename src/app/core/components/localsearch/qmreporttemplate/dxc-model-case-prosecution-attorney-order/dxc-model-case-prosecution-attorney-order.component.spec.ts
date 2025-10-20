import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelCaseProsecutionAttorneyOrderComponent } from './dxc-model-case-prosecution-attorney-order.component';

describe('DxcModelCaseProsecutionAttorneyOrderComponent', () => {
  let component: DxcModelCaseProsecutionAttorneyOrderComponent;
  let fixture: ComponentFixture<DxcModelCaseProsecutionAttorneyOrderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelCaseProsecutionAttorneyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelCaseProsecutionAttorneyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
