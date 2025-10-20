import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactBorderpassesComponent } from './list-table-contact-borderpasses.component';

describe('ListTableContactBorderpassesComponent', () => {
  let component: ListTableContactBorderpassesComponent;
  let fixture: ComponentFixture<ListTableContactBorderpassesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactBorderpassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactBorderpassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
