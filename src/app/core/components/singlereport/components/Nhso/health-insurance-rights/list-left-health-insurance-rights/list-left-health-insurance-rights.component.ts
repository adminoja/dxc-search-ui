import { Component, OnInit } from '@angular/core';
import { NhsoMoiHealthInsuranceRightsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-nhso-moi-nhso-health-insurance-rights/dxc-model-nhso-moi-nhso-health-insurance-rights.interface';
import { IDxc_Model_Nhso_Moi_Health_Insurance_Rights } from 'src/app/core/shared/models/Dxc_Model_Nhso_Moi_Health_Insurance_Rights';

@Component({
  selector: 'app-list-left-health-insurance-rights',
  templateUrl: './list-left-health-insurance-rights.component.html',
  styleUrls: ['./list-left-health-insurance-rights.component.scss']
})
export class ListLeftHealthInsuranceRightsComponent implements OnInit {
  healthInsuranceRightsResults: IDxc_Model_Nhso_Moi_Health_Insurance_Rights[];
  checkhealthInsuranceRightsResults: boolean;
  constructor(private ReportNhsoMoiHealthInsuranceRights: NhsoMoiHealthInsuranceRightsMetadata) { }

  ngOnInit() {
    this.ReportNhsoMoiHealthInsuranceRights.getSearchData();
    this.healthInsuranceRightsResults = this.ReportNhsoMoiHealthInsuranceRights.$results;
    console.log('this.healthInsuranceRightsResults');
    console.log(this.healthInsuranceRightsResults);

    if (this.healthInsuranceRightsResults.length !== 0) {
      this.checkhealthInsuranceRightsResults = true;
    } else {
      this.checkhealthInsuranceRightsResults = false;
    }
  }

}
