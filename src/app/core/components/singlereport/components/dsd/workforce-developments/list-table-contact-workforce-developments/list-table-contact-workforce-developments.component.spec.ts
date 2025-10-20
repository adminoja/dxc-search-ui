import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactWorkforceDevelopmentsComponent } from './list-table-contact-workforce-developments.component';

describe('ListTableContactWorkforceDevelopmentsComponent', () => {
  let component: ListTableContactWorkforceDevelopmentsComponent;
  let fixture: ComponentFixture<ListTableContactWorkforceDevelopmentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactWorkforceDevelopmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactWorkforceDevelopmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
