import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { DltDriverLicenseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dlt-driver-license/dxc-model-dlt-driver-license.interface';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalDriverLicenseComponent } from './list-normal-driver-license.component';

describe('ListNormalDriverLicenseComponent', () => {
  let component: ListNormalDriverLicenseComponent;
  let fixture: ComponentFixture<ListNormalDriverLicenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListNormalDriverLicenseComponent, FilterPipe, ConverseDatePipe],
      imports: [MatDialogModule],
      providers: [DltDriverLicenseMetadata]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalDriverLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
