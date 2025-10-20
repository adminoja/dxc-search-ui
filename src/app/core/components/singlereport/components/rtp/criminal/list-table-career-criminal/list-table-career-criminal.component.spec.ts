import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableCareerCriminalComponent } from './list-table-career-criminal.component';

describe('ListTableCareerCriminalComponent', () => {
  let component: ListTableCareerCriminalComponent;
  let fixture: ComponentFixture<ListTableCareerCriminalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableCareerCriminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableCareerCriminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
