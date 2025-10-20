import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcModelMoiMoeGraduatesComponent } from './dxc-model-moi-moe-graduates.component';

describe('DxcModelMoiMoeGraduatesComponent', () => {
  let component: DxcModelMoiMoeGraduatesComponent;
  let fixture: ComponentFixture<DxcModelMoiMoeGraduatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcModelMoiMoeGraduatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelMoiMoeGraduatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
