import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { SearchByCidComponent } from '../../../search-by-cid/search-by-cid.component';

import { ListLeftDriverLicenseComponent } from './list-left-driver-license.component';

describe('ListLeftDriverLicenseComponent', () => {
  let component: ListLeftDriverLicenseComponent;
  let fixture: ComponentFixture<ListLeftDriverLicenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftDriverLicenseComponent, SearchByCidComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftDriverLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
