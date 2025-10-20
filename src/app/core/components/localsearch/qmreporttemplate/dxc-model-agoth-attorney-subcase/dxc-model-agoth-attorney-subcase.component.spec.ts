import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelAgothAttorneySubcaseComponent } from './dxc-model-agoth-attorney-subcase.component';

describe('DxcModelAgothAttorneySubcaseComponent', () => {
  let component: DxcModelAgothAttorneySubcaseComponent;
  let fixture: ComponentFixture<DxcModelAgothAttorneySubcaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelAgothAttorneySubcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelAgothAttorneySubcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
