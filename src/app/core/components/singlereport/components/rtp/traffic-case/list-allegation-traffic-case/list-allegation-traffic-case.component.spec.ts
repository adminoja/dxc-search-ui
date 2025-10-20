import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllegationTrafficCaseComponent } from './list-allegation-traffic-case.component';

describe('ListAllegationTrafficCaseComponent', () => {
  let component: ListAllegationTrafficCaseComponent;
  let fixture: ComponentFixture<ListAllegationTrafficCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllegationTrafficCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllegationTrafficCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
