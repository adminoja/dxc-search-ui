import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcModelMoeMoiStudentsComponent } from './dxc-model-moe-moi-students.component';

describe('DxcModelMoeMoiStudentsComponent', () => {
  let component: DxcModelMoeMoiStudentsComponent;
  let fixture: ComponentFixture<DxcModelMoeMoiStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcModelMoeMoiStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelMoeMoiStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
