import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNormalTravelInformationComponent } from './list-normal-travel-information.component';

describe('ListNormalTravelInformationComponent', () => {
  let component: ListNormalTravelInformationComponent;
  let fixture: ComponentFixture<ListNormalTravelInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNormalTravelInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalTravelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
