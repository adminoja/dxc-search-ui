import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTablePersonChangenamePrimaryComponent } from './list-table-person-changename-primary.component';

describe('ListTablePersonChangenamePrimaryComponent', () => {
  let component: ListTablePersonChangenamePrimaryComponent;
  let fixture: ComponentFixture<ListTablePersonChangenamePrimaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTablePersonChangenamePrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTablePersonChangenamePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
