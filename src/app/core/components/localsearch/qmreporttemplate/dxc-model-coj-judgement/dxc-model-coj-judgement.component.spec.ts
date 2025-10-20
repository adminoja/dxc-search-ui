import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcModelCojJudgementComponent } from './dxc-model-coj-judgement.component';

describe('DxcModelCojJudgementComponent', () => {
  let component: DxcModelCojJudgementComponent;
  let fixture: ComponentFixture<DxcModelCojJudgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcModelCojJudgementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelCojJudgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
