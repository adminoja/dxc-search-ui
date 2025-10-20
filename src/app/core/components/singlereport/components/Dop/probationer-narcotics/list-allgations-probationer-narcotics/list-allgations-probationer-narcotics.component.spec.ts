import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllgationsProbationerNarcoticsComponent } from './list-allgations-probationer-narcotics.component';

describe('ListAllgationsProbationerNarcoticsComponent', () => {
  let component: ListAllgationsProbationerNarcoticsComponent;
  let fixture: ComponentFixture<ListAllgationsProbationerNarcoticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllgationsProbationerNarcoticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllgationsProbationerNarcoticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
