import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelDocReleasedPrisonersComponent } from './dxc-model-doc-released-prisoners.component';

describe('DxcModelDocReleasedPrisonersComponent', () => {
  let component: DxcModelDocReleasedPrisonersComponent;
  let fixture: ComponentFixture<DxcModelDocReleasedPrisonersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelDocReleasedPrisonersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelDocReleasedPrisonersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
