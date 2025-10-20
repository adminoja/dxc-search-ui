import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactPor4Component } from './list-contact-por4.component';

describe('ListContactPor4Component', () => {
  let component: ListContactPor4Component;
  let fixture: ComponentFixture<ListContactPor4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactPor4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactPor4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
