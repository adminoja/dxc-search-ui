import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllegationJuvenileOffender65Component } from './list-allegation-juvenile-offender65.component';

describe('ListAllegationJuvenileOffender65Component', () => {
  let component: ListAllegationJuvenileOffender65Component;
  let fixture: ComponentFixture<ListAllegationJuvenileOffender65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllegationJuvenileOffender65Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllegationJuvenileOffender65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
