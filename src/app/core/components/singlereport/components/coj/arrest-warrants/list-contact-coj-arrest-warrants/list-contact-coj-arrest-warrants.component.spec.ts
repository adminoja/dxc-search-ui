import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactCojArrestWarrantsComponent } from './list-contact-coj-arrest-warrants.component';

describe('ListContactCojArrestWarrantsComponent', () => {
  let component: ListContactCojArrestWarrantsComponent;
  let fixture: ComponentFixture<ListContactCojArrestWarrantsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactCojArrestWarrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactCojArrestWarrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
