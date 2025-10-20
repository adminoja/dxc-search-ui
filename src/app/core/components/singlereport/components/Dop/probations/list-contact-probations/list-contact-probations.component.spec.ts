import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactProbationsComponent } from './list-contact-probations.component';

describe('ListContactProbationsComponent', () => {
  let component: ListContactProbationsComponent;
  let fixture: ComponentFixture<ListContactProbationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactProbationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactProbationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
