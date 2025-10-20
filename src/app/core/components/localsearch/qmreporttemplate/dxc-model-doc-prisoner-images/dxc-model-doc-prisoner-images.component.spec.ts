import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelDocPrisonerImagesComponent } from './dxc-model-doc-prisoner-images.component';

describe('DxcModelDocPrisonerImagesComponent', () => {
  let component: DxcModelDocPrisonerImagesComponent;
  let fixture: ComponentFixture<DxcModelDocPrisonerImagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelDocPrisonerImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelDocPrisonerImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
