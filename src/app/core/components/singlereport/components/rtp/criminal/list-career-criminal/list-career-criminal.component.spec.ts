import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCareerCriminalComponent } from './list-career-criminal.component';

describe('ListCareerCriminalComponent', () => {
  let component: ListCareerCriminalComponent;
  let fixture: ComponentFixture<ListCareerCriminalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCareerCriminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCareerCriminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
