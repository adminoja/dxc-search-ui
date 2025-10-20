import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableLandAndCondominiumTitlesComponent } from './list-table-land-and-condominium-titles.component';

describe('ListTableLandAndCondominiumTitlesComponent', () => {
  let component: ListTableLandAndCondominiumTitlesComponent;
  let fixture: ComponentFixture<ListTableLandAndCondominiumTitlesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableLandAndCondominiumTitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableLandAndCondominiumTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
