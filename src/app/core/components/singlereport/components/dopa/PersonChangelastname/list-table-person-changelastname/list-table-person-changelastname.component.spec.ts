import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTablePersonChangelastnameComponent } from './list-table-person-changelastname.component';

describe('ListTablePersonChangelastnameComponent', () => {
  let component: ListTablePersonChangelastnameComponent;
  let fixture: ComponentFixture<ListTablePersonChangelastnameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTablePersonChangelastnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTablePersonChangelastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
