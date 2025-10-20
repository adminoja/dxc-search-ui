import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactWorkforceDevelopmentsComponent } from './list-contact-workforce-developments.component';

describe('ListContactWorkforceDevelopmentsComponent', () => {
  let component: ListContactWorkforceDevelopmentsComponent;
  let fixture: ComponentFixture<ListContactWorkforceDevelopmentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactWorkforceDevelopmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactWorkforceDevelopmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
