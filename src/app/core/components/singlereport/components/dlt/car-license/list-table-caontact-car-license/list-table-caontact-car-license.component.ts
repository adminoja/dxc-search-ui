import { Component, OnInit } from '@angular/core';
import { DltCarLicenseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dlt-car-license/dxc-model-dlt-car-license.interface';
import { IDxc_Model_Dlt_CarLicenseNew } from 'src/app/core/shared/models/Dxc_Model_Dlt_CarLicenseNew';

@Component({
  selector: 'app-list-table-caontact-car-license',
  templateUrl: './list-table-caontact-car-license.component.html',
  styleUrls: ['./list-table-caontact-car-license.component.scss']
})
export class ListTableCaontactCarLicenseComponent implements OnInit {

  carLicenseResults: IDxc_Model_Dlt_CarLicenseNew[];
  carLicenseCount: number;
  report_name: string;
  exitCode: any;
  constructor(private ReportDltcarLicense: DltCarLicenseMetadata) { }

  ngOnInit() {
    this.ReportDltcarLicense.getSearchDataContact();
    this.carLicenseResults = this.ReportDltcarLicense.$resultsContact;
    this.carLicenseCount = this.ReportDltcarLicense.$countContact;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.carLicenseResults
  }

}
