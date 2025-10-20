import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTablePor4Component } from './list-table-por4.component';

describe('ListTablePor4Component', () => {
  let component: ListTablePor4Component;
  let fixture: ComponentFixture<ListTablePor4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTablePor4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTablePor4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
