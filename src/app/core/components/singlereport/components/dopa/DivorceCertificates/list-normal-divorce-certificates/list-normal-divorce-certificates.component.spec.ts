import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { DopaMoiDivorceCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-divorce-certificates/dxc-model-dopa-moi-divorce-certificates.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ThaiDatePipe } from 'src/app/core/shared/pipe/thaidate.pipe';

import { ListNormalDivorceCertificatesComponent } from './list-normal-divorce-certificates.component';

describe('ListNormalDivorceCertificatesComponent', () => {
  let component: ListNormalDivorceCertificatesComponent;
  let fixture: ComponentFixture<ListNormalDivorceCertificatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalDivorceCertificatesComponent, FilterPipe, ThaiDatePipe ],
      imports: [ MatDialogModule ],
      providers: [ DopaMoiDivorceCertificatesMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalDivorceCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
