import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactAgothChargeVictimComponent } from './list-contact-agoth-charge-victim.component';

describe('ListContactAgothChargeVictimComponent', () => {
  let component: ListContactAgothChargeVictimComponent;
  let fixture: ComponentFixture<ListContactAgothChargeVictimComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactAgothChargeVictimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactAgothChargeVictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
