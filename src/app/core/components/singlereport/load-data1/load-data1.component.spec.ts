import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoadData1Component } from './load-data1.component';

describe('LoadData1Component', () => {
  let component: LoadData1Component;
  let fixture: ComponentFixture<LoadData1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadData1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadData1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
