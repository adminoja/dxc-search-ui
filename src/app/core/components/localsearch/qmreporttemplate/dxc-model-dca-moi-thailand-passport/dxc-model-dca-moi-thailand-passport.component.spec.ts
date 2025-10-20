import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelMfaMoiThailandPassportComponent } from './dxc-model-dca-moi-thailand-passport.component';

describe('DxcModelMfaMoiThailandPassportComponent', () => {
  let component: DxcModelMfaMoiThailandPassportComponent;
  let fixture: ComponentFixture<DxcModelMfaMoiThailandPassportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelMfaMoiThailandPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelMfaMoiThailandPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
