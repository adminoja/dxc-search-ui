import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelDopaMoiDopaPersonFirstnameLastnameComponent } from './dxc-model-dopa-moi-dopa-person-firstname-lastname.component';

describe('DxcModelDopaMoiDopaPersonFirstnameLastnameComponent', () => {
  let component: DxcModelDopaMoiDopaPersonFirstnameLastnameComponent;
  let fixture: ComponentFixture<DxcModelDopaMoiDopaPersonFirstnameLastnameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelDopaMoiDopaPersonFirstnameLastnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelDopaMoiDopaPersonFirstnameLastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
