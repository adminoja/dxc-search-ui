import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcLoaderComponent } from './dxc-loader.component';

describe('DxcLoaderComponent', () => {
  let component: DxcLoaderComponent;
  let fixture: ComponentFixture<DxcLoaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
