import { Component, OnInit } from '@angular/core';
import { DltDriverLicenseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dlt-driver-license/dxc-model-dlt-driver-license.interface';
import { IDxc_Model_Dlt_DriverLicenseNew } from 'src/app/core/shared/models/Dxc_Model_Dlt_DriverLicenseNew';

@Component({
  selector: 'app-list-left-driver-license',
  templateUrl: './list-left-driver-license.component.html',
  styleUrls: ['./list-left-driver-license.component.scss'],
  providers: [DltDriverLicenseMetadata]
})
export class ListLeftDriverLicenseComponent implements OnInit {
  driverLicenseResults: IDxc_Model_Dlt_DriverLicenseNew[];
  checkdriverLicenseResults: boolean;
  constructor(private ReportDltDriverLicense: DltDriverLicenseMetadata) { }

  ngOnInit() {
    this.ReportDltDriverLicense.getSearchData();
    this.driverLicenseResults = this.ReportDltDriverLicense.$results;

    if(this.driverLicenseResults.length !== 0 ){
      this.checkdriverLicenseResults = true;
    } else {
      this.checkdriverLicenseResults = false;
    }
  }

}
