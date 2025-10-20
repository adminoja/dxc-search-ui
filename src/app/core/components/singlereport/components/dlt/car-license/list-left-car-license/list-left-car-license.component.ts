import { Component, OnInit } from '@angular/core';
import { DltCarLicenseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dlt-car-license/dxc-model-dlt-car-license.interface';
import { IDxc_Model_Dlt_CarLicenseNew } from 'src/app/core/shared/models/Dxc_Model_Dlt_CarLicenseNew';

@Component({
  selector: 'app-list-left-car-license',
  templateUrl: './list-left-car-license.component.html',
  styleUrls: ['./list-left-car-license.component.scss']
})
export class ListLeftCarLicenseComponent implements OnInit {
  carLicenseResults: IDxc_Model_Dlt_CarLicenseNew[];
  checkcarLicenseResults: boolean;
  constructor(private ReportDltCarLicense: DltCarLicenseMetadata) { }

  ngOnInit() {
    this.ReportDltCarLicense.getSearchData();
    this.carLicenseResults = this.ReportDltCarLicense.$results;

    if (this.carLicenseResults.length !== 0 ) {
      this.checkcarLicenseResults = true;
    } else {
      this.checkcarLicenseResults = false;
    }
  }

}
