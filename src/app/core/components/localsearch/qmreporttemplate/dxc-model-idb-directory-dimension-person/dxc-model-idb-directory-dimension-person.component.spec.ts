import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelIdbDirectoryDimensionPersonComponent } from './dxc-model-idb-directory-dimension-person.component';

describe('DxcModelidbDirectoryDimensionPersonComponent', () => {
  let component: DxcModelIdbDirectoryDimensionPersonComponent;
  let fixture: ComponentFixture<DxcModelIdbDirectoryDimensionPersonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelIdbDirectoryDimensionPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelIdbDirectoryDimensionPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
