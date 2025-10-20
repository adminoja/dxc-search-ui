import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelSsoEmploymentComponent } from './dxc-model-sso-employment.component';

describe('DxcModelSsoEmploymentComponent', () => {
  let component: DxcModelSsoEmploymentComponent;
  let fixture: ComponentFixture<DxcModelSsoEmploymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelSsoEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelSsoEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
