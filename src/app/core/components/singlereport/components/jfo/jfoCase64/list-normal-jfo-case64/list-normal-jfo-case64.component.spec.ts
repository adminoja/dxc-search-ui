import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListNormalJfoCase64Component } from './list-normal-jfo-case64.component';

describe('ListNormalJfoCase64Component', () => {
  let component: ListNormalJfoCase64Component;
  let fixture: ComponentFixture<ListNormalJfoCase64Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalJfoCase64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalJfoCase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
