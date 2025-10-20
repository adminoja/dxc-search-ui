import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactPersonChangelastnameComponent } from './list-table-contact-person-changelastname.component';

describe('ListTableContactPersonChangelastnameComponent', () => {
  let component: ListTableContactPersonChangelastnameComponent;
  let fixture: ComponentFixture<ListTableContactPersonChangelastnameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactPersonChangelastnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactPersonChangelastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
