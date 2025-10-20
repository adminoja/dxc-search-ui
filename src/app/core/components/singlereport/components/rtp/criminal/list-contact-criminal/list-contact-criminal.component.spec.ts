import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactCriminalComponent } from './list-contact-criminal.component';

describe('ListContactCriminalComponent', () => {
  let component: ListContactCriminalComponent;
  let fixture: ComponentFixture<ListContactCriminalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactCriminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactCriminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
