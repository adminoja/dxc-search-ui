import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DopaMoiDeathCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-death-certificates/dxc-model-dopa-moi-death-certificates.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftDeathCertificatesComponent } from './list-left-death-certificates.component';

describe('ListLeftDeathCertificatesComponent', () => {
  let component: ListLeftDeathCertificatesComponent;
  let fixture: ComponentFixture<ListLeftDeathCertificatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftDeathCertificatesComponent, FilterPipe ],
      providers: [ DopaMoiDeathCertificatesMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftDeathCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
