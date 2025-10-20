import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListLeftJfoCase64Component } from './list-left-jfo-case64.component';

describe('ListLeftJfoCase64Component', () => {
  let component: ListLeftJfoCase64Component;
  let fixture: ComponentFixture<ListLeftJfoCase64Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftJfoCase64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftJfoCase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
