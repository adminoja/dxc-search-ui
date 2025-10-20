import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DolLandAndCondominiumTitlesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dol-land-and-condominium-titles/dxc-model-dol-land-and-condominium-titles.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftLandAndCondominiumTitlesComponent } from './list-left-land-and-condominium-titles.component';

describe('ListLeftLandAndCondominiumTitlesComponent', () => {
  let component: ListLeftLandAndCondominiumTitlesComponent;
  let fixture: ComponentFixture<ListLeftLandAndCondominiumTitlesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftLandAndCondominiumTitlesComponent, FilterPipe ],
      imports: [ RouterTestingModule ],
      providers: [ DolLandAndCondominiumTitlesMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftLandAndCondominiumTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
