import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactPrisonerComponent } from './list-table-contact-prisoner.component';

describe('ListTableContactPrisonerComponent', () => {
  let component: ListTableContactPrisonerComponent;
  let fixture: ComponentFixture<ListTableContactPrisonerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactPrisonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactPrisonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
