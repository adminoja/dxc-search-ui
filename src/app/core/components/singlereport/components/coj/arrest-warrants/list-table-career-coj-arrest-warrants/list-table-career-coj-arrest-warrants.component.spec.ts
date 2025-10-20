import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableCareerCojArrestWarrantsComponent } from './list-table-career-coj-arrest-warrants.component';

describe('ListTableCareerCojArrestWarrantsComponent', () => {
  let component: ListTableCareerCojArrestWarrantsComponent;
  let fixture: ComponentFixture<ListTableCareerCojArrestWarrantsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableCareerCojArrestWarrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableCareerCojArrestWarrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
