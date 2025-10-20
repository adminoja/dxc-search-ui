import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableBorderpassesComponent } from './list-table-borderpasses.component';

describe('ListTableBorderpassesComponent', () => {
  let component: ListTableBorderpassesComponent;
  let fixture: ComponentFixture<ListTableBorderpassesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableBorderpassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableBorderpassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
