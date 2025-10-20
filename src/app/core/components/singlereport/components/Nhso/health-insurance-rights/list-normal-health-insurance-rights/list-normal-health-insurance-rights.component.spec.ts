import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NhsoMoiHealthInsuranceRightsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-nhso-moi-nhso-health-insurance-rights/dxc-model-nhso-moi-nhso-health-insurance-rights.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ThaiDatePipe } from 'src/app/core/shared/pipe/thaidate.pipe';

import { ListNormalHealthInsuranceRightsComponent } from './list-normal-health-insurance-rights.component';

describe('ListNormalHealthInsuranceRightsComponent', () => {
  let component: ListNormalHealthInsuranceRightsComponent;
  let fixture: ComponentFixture<ListNormalHealthInsuranceRightsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalHealthInsuranceRightsComponent, FilterPipe, ThaiDatePipe ],
      imports: [ RouterTestingModule, MatDialogModule ],
      providers: [ NhsoMoiHealthInsuranceRightsMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalHealthInsuranceRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
