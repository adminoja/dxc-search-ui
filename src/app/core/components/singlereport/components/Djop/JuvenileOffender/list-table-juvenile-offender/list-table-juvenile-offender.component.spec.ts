import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableJuvenileOffenderComponent } from './list-table-juvenile-offender.component';

describe('ListTableJuvenileOffenderComponent', () => {
  let component: ListTableJuvenileOffenderComponent;
  let fixture: ComponentFixture<ListTableJuvenileOffenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableJuvenileOffenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableJuvenileOffenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
