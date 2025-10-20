import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactProbationsComponent } from './list-table-contact-probations.component';

describe('ListTableContactProbationsComponent', () => {
  let component: ListTableContactProbationsComponent;
  let fixture: ComponentFixture<ListTableContactProbationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactProbationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactProbationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
