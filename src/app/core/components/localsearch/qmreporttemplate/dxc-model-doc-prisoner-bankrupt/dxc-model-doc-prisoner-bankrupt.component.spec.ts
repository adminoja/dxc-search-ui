import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcModelDocPrisonerBankruptComponent } from './dxc-model-doc-prisoner-bankrupt.component';

describe('DxcModelDocPrisonerBankruptComponent', () => {
  let component: DxcModelDocPrisonerBankruptComponent;
  let fixture: ComponentFixture<DxcModelDocPrisonerBankruptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcModelDocPrisonerBankruptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelDocPrisonerBankruptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
