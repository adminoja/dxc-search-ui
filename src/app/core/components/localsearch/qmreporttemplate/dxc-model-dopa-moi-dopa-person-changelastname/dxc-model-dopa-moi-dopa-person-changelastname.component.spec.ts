import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelDopaMoiDopaPersonChangelastnameComponent } from './dxc-model-dopa-moi-dopa-person-changelastname.component';

describe('DxcModelDopaMoiDopaPersonChangelastnameComponent', () => {
  let component: DxcModelDopaMoiDopaPersonChangelastnameComponent;
  let fixture: ComponentFixture<DxcModelDopaMoiDopaPersonChangelastnameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelDopaMoiDopaPersonChangelastnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelDopaMoiDopaPersonChangelastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
