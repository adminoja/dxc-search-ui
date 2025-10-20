import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeftTravelInformationComponent } from './list-left-travel-information.component';

describe('ListLeftTravelInformationComponent', () => {
  let component: ListLeftTravelInformationComponent;
  let fixture: ComponentFixture<ListLeftTravelInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLeftTravelInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftTravelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
