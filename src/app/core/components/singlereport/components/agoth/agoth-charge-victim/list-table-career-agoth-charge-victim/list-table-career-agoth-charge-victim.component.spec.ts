import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableCareerAgothChargeVictimComponent } from './list-table-career-agoth-charge-victim.component';

describe('ListTableCareerAgothChargeVictimComponent', () => {
  let component: ListTableCareerAgothChargeVictimComponent;
  let fixture: ComponentFixture<ListTableCareerAgothChargeVictimComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableCareerAgothChargeVictimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableCareerAgothChargeVictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
