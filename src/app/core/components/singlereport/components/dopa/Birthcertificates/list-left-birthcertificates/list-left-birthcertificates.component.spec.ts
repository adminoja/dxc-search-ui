import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DopaMoiBirthCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-birthcertificates/dxc-model-dopa-moi-birthcertificates.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftBirthcertificatesComponent } from './list-left-birthcertificates.component';

describe('ListLeftBirthcertificatesComponent', () => {
  let component: ListLeftBirthcertificatesComponent;
  let fixture: ComponentFixture<ListLeftBirthcertificatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftBirthcertificatesComponent, FilterPipe ],
      providers: [DopaMoiBirthCertificatesMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftBirthcertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
