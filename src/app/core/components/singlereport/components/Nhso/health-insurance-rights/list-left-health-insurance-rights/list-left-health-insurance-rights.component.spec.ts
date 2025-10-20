import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NhsoMoiHealthInsuranceRightsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-nhso-moi-nhso-health-insurance-rights/dxc-model-nhso-moi-nhso-health-insurance-rights.interface';

import { ListLeftHealthInsuranceRightsComponent } from './list-left-health-insurance-rights.component';

describe('ListLeftHealthInsuranceRightsComponent', () => {
  let component: ListLeftHealthInsuranceRightsComponent;
  let fixture: ComponentFixture<ListLeftHealthInsuranceRightsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftHealthInsuranceRightsComponent ],
      providers: [NhsoMoiHealthInsuranceRightsMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftHealthInsuranceRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
