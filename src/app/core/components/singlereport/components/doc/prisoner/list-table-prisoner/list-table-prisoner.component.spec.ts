import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTablePrisonerComponent } from './list-table-prisoner.component';

describe('ListTablePrisonerComponent', () => {
  let component: ListTablePrisonerComponent;
  let fixture: ComponentFixture<ListTablePrisonerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTablePrisonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTablePrisonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
