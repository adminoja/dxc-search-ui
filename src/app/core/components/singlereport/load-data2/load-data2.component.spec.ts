import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoadData2Component } from './load-data2.component';

describe('LoadData2Component', () => {
  let component: LoadData2Component;
  let fixture: ComponentFixture<LoadData2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadData2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadData2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
