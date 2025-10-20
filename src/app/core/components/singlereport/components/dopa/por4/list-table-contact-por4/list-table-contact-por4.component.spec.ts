import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactPor4Component } from './list-table-contact-por4.component';

describe('ListTableContactPor4Component', () => {
  let component: ListTableContactPor4Component;
  let fixture: ComponentFixture<ListTableContactPor4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactPor4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactPor4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
