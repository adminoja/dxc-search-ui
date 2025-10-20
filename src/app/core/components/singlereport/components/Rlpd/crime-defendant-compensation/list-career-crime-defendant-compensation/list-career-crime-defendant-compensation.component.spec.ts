import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCareerCrimeDefendantCompensationComponent } from './list-career-crime-defendant-compensation.component';

describe('ListCareerCrimeDefendantCompensationComponent', () => {
  let component: ListCareerCrimeDefendantCompensationComponent;
  let fixture: ComponentFixture<ListCareerCrimeDefendantCompensationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCareerCrimeDefendantCompensationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCareerCrimeDefendantCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
