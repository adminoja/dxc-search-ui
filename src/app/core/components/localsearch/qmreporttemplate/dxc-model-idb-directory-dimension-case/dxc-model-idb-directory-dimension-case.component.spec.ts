import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelIdbDirectoryDimensionCaseComponent } from './dxc-model-idb-directory-dimension-case.component';

describe('DxcModelIdbDirectoryDimensionCaseComponent', () => {
  let component: DxcModelIdbDirectoryDimensionCaseComponent;
  let fixture: ComponentFixture<DxcModelIdbDirectoryDimensionCaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelIdbDirectoryDimensionCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelIdbDirectoryDimensionCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
