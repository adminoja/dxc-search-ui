import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelDocRemandeeComponent } from './dxc-model-doc-remandee.component';

describe('DxcModelDocRemandeeComponent', () => {
  let component: DxcModelDocRemandeeComponent;
  let fixture: ComponentFixture<DxcModelDocRemandeeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelDocRemandeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelDocRemandeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
