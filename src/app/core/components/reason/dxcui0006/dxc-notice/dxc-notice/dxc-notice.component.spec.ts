import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcNoticeComponent } from './dxc-notice.component';

describe('DxcNoticeComponent', () => {
  let component: DxcNoticeComponent;
  let fixture: ComponentFixture<DxcNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxcNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
