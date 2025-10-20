import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeftTrafficCaseComponent } from './list-left-traffic-case.component';

describe('ListLeftTrafficCaseComponent', () => {
  let component: ListLeftTrafficCaseComponent;
  let fixture: ComponentFixture<ListLeftTrafficCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLeftTrafficCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftTrafficCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
