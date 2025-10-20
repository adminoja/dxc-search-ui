import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcPolicyComponent } from './dxc-policy.component';

describe('DxcPolicyComponent', () => {
  let component: DxcPolicyComponent;
  let fixture: ComponentFixture<DxcPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
