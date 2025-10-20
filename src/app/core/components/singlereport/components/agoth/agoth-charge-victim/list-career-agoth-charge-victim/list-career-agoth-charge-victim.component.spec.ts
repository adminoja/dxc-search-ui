import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCareerAgothChargeVictimComponent } from './list-career-agoth-charge-victim.component';

describe('ListCareerAgothChargeVictimComponent', () => {
  let component: ListCareerAgothChargeVictimComponent;
  let fixture: ComponentFixture<ListCareerAgothChargeVictimComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCareerAgothChargeVictimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCareerAgothChargeVictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
