import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListAllgetionCojArrestWarrantsComponent } from './list-allgetion-coj-arrest-warrants.component';

describe('ListAllgetionCojArrestWarrantsComponent', () => {
  let component: ListAllgetionCojArrestWarrantsComponent;
  let fixture: ComponentFixture<ListAllgetionCojArrestWarrantsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllgetionCojArrestWarrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllgetionCojArrestWarrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
