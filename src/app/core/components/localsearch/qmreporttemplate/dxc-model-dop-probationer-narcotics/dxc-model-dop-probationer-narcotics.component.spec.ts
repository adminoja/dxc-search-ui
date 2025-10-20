import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcModelDopProbationerNarcoticsComponent } from './dxc-model-dop-probationer-narcotics.component';

describe('DxcModelDopProbationerNarcoticsComponent', () => {
  let component: DxcModelDopProbationerNarcoticsComponent;
  let fixture: ComponentFixture<DxcModelDopProbationerNarcoticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcModelDopProbationerNarcoticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelDopProbationerNarcoticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
