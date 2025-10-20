import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactPrisonerComponent } from './list-contact-prisoner.component';

describe('ListContactPrisonerComponent', () => {
  let component: ListContactPrisonerComponent;
  let fixture: ComponentFixture<ListContactPrisonerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactPrisonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactPrisonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
