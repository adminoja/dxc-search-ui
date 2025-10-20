import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelJfoJfoCase64Component } from './dxc-model-jfo-jfo-case64.component';

describe('DxcModelJfoJfoCase64Component', () => {
  let component: DxcModelJfoJfoCase64Component;
  let fixture: ComponentFixture<DxcModelJfoJfoCase64Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelJfoJfoCase64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelJfoJfoCase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
