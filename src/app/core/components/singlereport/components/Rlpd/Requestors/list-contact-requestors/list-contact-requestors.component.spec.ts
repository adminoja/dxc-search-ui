import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactRequestorsComponent } from './list-contact-requestors.component';

describe('ListContactRequestorsComponent', () => {
  let component: ListContactRequestorsComponent;
  let fixture: ComponentFixture<ListContactRequestorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactRequestorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactRequestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
