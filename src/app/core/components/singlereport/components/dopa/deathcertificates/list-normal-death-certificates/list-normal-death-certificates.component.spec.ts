import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DopaMoiDeathCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-death-certificates/dxc-model-dopa-moi-death-certificates.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ThaiDatePipe } from 'src/app/core/shared/pipe/thaidate.pipe';

import { ListNormalDeathCertificatesComponent } from './list-normal-death-certificates.component';

describe('ListNormalDeathCertificatesComponent', () => {
  let component: ListNormalDeathCertificatesComponent;
  let fixture: ComponentFixture<ListNormalDeathCertificatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalDeathCertificatesComponent, FilterPipe, ThaiDatePipe ],
      imports: [ RouterTestingModule ],
      providers: [ DopaMoiDeathCertificatesMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalDeathCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
