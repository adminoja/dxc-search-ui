import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactPersonChangelastnameComponent } from './list-contact-person-changelastname.component';

describe('ListContactPersonChangelastnameComponent', () => {
  let component: ListContactPersonChangelastnameComponent;
  let fixture: ComponentFixture<ListContactPersonChangelastnameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactPersonChangelastnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactPersonChangelastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
