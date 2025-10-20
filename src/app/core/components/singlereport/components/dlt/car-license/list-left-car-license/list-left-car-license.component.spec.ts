import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DltCarLicenseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dlt-car-license/dxc-model-dlt-car-license.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftCarLicenseComponent } from './list-left-car-license.component';

describe('ListLeftCarLicenseComponent', () => {
  let component: ListLeftCarLicenseComponent;
  let fixture: ComponentFixture<ListLeftCarLicenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftCarLicenseComponent, FilterPipe ],
      providers: [ DltCarLicenseMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftCarLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
