import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcModelDocAbsolutePrisonerInformationBeforeReleaseOnProbationComponent } from './dxc-model-doc-absolute-prisoner-information-before-release-on-probation.component';

describe('DxcModelDocAbsolutePrisonerInformationBeforeReleaseOnProbationComponent', () => {
  let component: DxcModelDocAbsolutePrisonerInformationBeforeReleaseOnProbationComponent;
  let fixture: ComponentFixture<DxcModelDocAbsolutePrisonerInformationBeforeReleaseOnProbationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcModelDocAbsolutePrisonerInformationBeforeReleaseOnProbationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelDocAbsolutePrisonerInformationBeforeReleaseOnProbationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
