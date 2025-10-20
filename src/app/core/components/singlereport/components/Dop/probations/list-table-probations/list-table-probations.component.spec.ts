import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableProbationsComponent } from './list-table-probations.component';

describe('ListTableProbationsComponent', () => {
  let component: ListTableProbationsComponent;
  let fixture: ComponentFixture<ListTableProbationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableProbationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableProbationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
