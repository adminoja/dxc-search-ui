import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCareerCojArrestWarrantsComponent } from './list-career-coj-arrest-warrants.component';

describe('ListCareerCojArrestWarrantsComponent', () => {
  let component: ListCareerCojArrestWarrantsComponent;
  let fixture: ComponentFixture<ListCareerCojArrestWarrantsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCareerCojArrestWarrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCareerCojArrestWarrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
