import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableEmploymentComponent } from './list-table-employment.component';

describe('ListTableEmploymentComponent', () => {
  let component: ListTableEmploymentComponent;
  let fixture: ComponentFixture<ListTableEmploymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
