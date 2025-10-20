import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactCojArrestWarrantsComponent } from './list-table-contact-coj-arrest-warrants.component';

describe('ListTableContactCojArrestWarrantsComponent', () => {
  let component: ListTableContactCojArrestWarrantsComponent;
  let fixture: ComponentFixture<ListTableContactCojArrestWarrantsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactCojArrestWarrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactCojArrestWarrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
