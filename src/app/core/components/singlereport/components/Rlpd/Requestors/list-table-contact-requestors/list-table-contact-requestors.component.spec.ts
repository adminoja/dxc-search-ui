import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactRequestorsComponent } from './list-table-contact-requestors.component';

describe('ListTableContactRequestorsComponent', () => {
  let component: ListTableContactRequestorsComponent;
  let fixture: ComponentFixture<ListTableContactRequestorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactRequestorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactRequestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
