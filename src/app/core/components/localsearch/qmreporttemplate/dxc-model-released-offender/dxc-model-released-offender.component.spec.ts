import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelReleasedOffenderComponent } from './dxc-model-released-offender.component';

describe('DxcModelReleasedOffenderComponent', () => {
  let component: DxcModelReleasedOffenderComponent;
  let fixture: ComponentFixture<DxcModelReleasedOffenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelReleasedOffenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelReleasedOffenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
