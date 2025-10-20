import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeftJuvenileOffender65Component } from './list-left-juvenile-offender65.component';

describe('ListLeftJuvenileOffender65Component', () => {
  let component: ListLeftJuvenileOffender65Component;
  let fixture: ComponentFixture<ListLeftJuvenileOffender65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLeftJuvenileOffender65Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftJuvenileOffender65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
