import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactBorderpassesComponent } from './list-contact-borderpasses.component';

describe('ListContactBorderpassesComponent', () => {
  let component: ListContactBorderpassesComponent;
  let fixture: ComponentFixture<ListContactBorderpassesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactBorderpassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactBorderpassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
