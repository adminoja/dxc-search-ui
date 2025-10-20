import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { DltCarLicenseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dlt-car-license/dxc-model-dlt-car-license.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalCarLicenseComponent } from './list-normal-car-license.component';

describe('ListNormalCarLicenseComponent', () => {
  let component: ListNormalCarLicenseComponent;
  let fixture: ComponentFixture<ListNormalCarLicenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalCarLicenseComponent, FilterPipe ],
      imports: [ MatDialogModule ],
      providers: [ DltCarLicenseMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalCarLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
