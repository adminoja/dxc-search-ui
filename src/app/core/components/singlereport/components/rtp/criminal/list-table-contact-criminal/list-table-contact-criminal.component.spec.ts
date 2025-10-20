import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactCriminalComponent } from './list-table-contact-criminal.component';

describe('ListTableContactCriminalComponent', () => {
  let component: ListTableContactCriminalComponent;
  let fixture: ComponentFixture<ListTableContactCriminalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactCriminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactCriminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
