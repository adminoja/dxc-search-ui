import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableCareerCrimeVictimCompensationComponent } from './list-table-career-crime-victim-compensation.component';

describe('ListTableCareerCrimeVictimCompensationComponent', () => {
  let component: ListTableCareerCrimeVictimCompensationComponent;
  let fixture: ComponentFixture<ListTableCareerCrimeVictimCompensationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableCareerCrimeVictimCompensationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableCareerCrimeVictimCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
