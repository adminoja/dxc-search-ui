import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalLandAndCondominiumTitlesComponent } from './list-normal-land-and-condominium-titles.component';

describe('ListNormalLandAndCondominiumTitlesComponent', () => {
  let component: ListNormalLandAndCondominiumTitlesComponent;
  let fixture: ComponentFixture<ListNormalLandAndCondominiumTitlesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalLandAndCondominiumTitlesComponent, FilterPipe ],
      imports: [ RouterTestingModule , MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalLandAndCondominiumTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
