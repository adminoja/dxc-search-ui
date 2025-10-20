import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListLeftCojArrestWarrantsComponent } from './list-left-coj-arrest-warrants.component';

describe('ListLeftCojArrestWarrantsComponent', () => {
  let component: ListLeftCojArrestWarrantsComponent;
  let fixture: ComponentFixture<ListLeftCojArrestWarrantsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftCojArrestWarrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftCojArrestWarrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
