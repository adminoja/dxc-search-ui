import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableCareerCrimeDefendantCompensationComponent } from './list-table-career-crime-defendant-compensation.component';

describe('ListTableCareerCrimeDefendantCompensationComponent', () => {
  let component: ListTableCareerCrimeDefendantCompensationComponent;
  let fixture: ComponentFixture<ListTableCareerCrimeDefendantCompensationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableCareerCrimeDefendantCompensationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableCareerCrimeDefendantCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
