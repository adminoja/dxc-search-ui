import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DopaMoiDivorceCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-divorce-certificates/dxc-model-dopa-moi-divorce-certificates.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftDivorceCertificatesComponent } from './list-left-divorce-certificates.component';

describe('ListLeftDivorceCertificatesComponent', () => {
  let component: ListLeftDivorceCertificatesComponent;
  let fixture: ComponentFixture<ListLeftDivorceCertificatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftDivorceCertificatesComponent, FilterPipe ],
      providers: [ DopaMoiDivorceCertificatesMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftDivorceCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
