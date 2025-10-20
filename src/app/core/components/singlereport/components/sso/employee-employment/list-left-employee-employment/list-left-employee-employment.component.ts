import { Component, OnInit } from '@angular/core';
import { SsoEmployeeEmploymentMetaData } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-sso-employee-employment/dxc-model-sso-employee-employment.interface';
import { IDxc_Model_Sso_EmployeeEmployment } from 'src/app/core/shared/models/Dxc_Model_Sso_EmployeeEmployment';

@Component({
  selector: 'app-list-left-employee-employment',
  templateUrl: './list-left-employee-employment.component.html',
  styleUrls: ['./list-left-employee-employment.component.scss']
})
export class ListLeftEmployeeEmploymentComponent implements OnInit {
  ssoEmployeeEmploymentResults: IDxc_Model_Sso_EmployeeEmployment[];
  checkSsoEmployeeEmploymentResults: boolean;
  constructor(private ReportSsoEmployeeEmployment: SsoEmployeeEmploymentMetaData) { }

  ngOnInit() {
    this.ReportSsoEmployeeEmployment.getSearchData();
    this.ssoEmployeeEmploymentResults = this.ReportSsoEmployeeEmployment.$results;
    if(this.ssoEmployeeEmploymentResults.length !== 0 ){
      this.checkSsoEmployeeEmploymentResults = true;
    } else {
      this.checkSsoEmployeeEmploymentResults = false;
    }
  }

}
