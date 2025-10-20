import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactAgothChargeVictimComponent } from './list-table-contact-agoth-charge-victim.component';

describe('ListTableContactAgothChargeVictimComponent', () => {
  let component: ListTableContactAgothChargeVictimComponent;
  let fixture: ComponentFixture<ListTableContactAgothChargeVictimComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactAgothChargeVictimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactAgothChargeVictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
