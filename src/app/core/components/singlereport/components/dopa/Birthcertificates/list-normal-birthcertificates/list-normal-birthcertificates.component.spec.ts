import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { DopaMoiBirthCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-birthcertificates/dxc-model-dopa-moi-birthcertificates.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ThaiDatePipe } from 'src/app/core/shared/pipe/thaidate.pipe';

import { ListNormalBirthcertificatesComponent } from './list-normal-birthcertificates.component';

describe('ListNormalBirthcertificatesComponent', () => {
  let component: ListNormalBirthcertificatesComponent;
  let fixture: ComponentFixture<ListNormalBirthcertificatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalBirthcertificatesComponent, FilterPipe, ThaiDatePipe ],
      imports: [ RouterTestingModule, MatDialogModule ],
      providers: [ DopaMoiBirthCertificatesMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalBirthcertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
