import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCareerCrimeVictimCompensationComponent } from './list-career-crime-victim-compensation.component';

describe('ListCareerCrimeVictimCompensationComponent', () => {
  let component: ListCareerCrimeVictimCompensationComponent;
  let fixture: ComponentFixture<ListCareerCrimeVictimCompensationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCareerCrimeVictimCompensationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCareerCrimeVictimCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
