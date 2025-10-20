import { Component, OnInit } from '@angular/core';
import { DltCarLicenseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dlt-car-license/dxc-model-dlt-car-license.interface';
import { IDxc_Model_Dlt_CarLicenseNew } from 'src/app/core/shared/models/Dxc_Model_Dlt_CarLicenseNew';

@Component({
  selector: 'app-list-contact-car-license',
  templateUrl: './list-contact-car-license.component.html',
  styleUrls: ['./list-contact-car-license.component.scss']
})
export class ListContactCarLicenseComponent implements OnInit {
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
