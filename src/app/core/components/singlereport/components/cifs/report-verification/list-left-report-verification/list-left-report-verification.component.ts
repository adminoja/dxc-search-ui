import { Component, OnInit } from '@angular/core';
import { CifsReportVerificationMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-cifs-report-verification/dxc-model-cifs-report-verification.interface';
import { IDxc_Model_Cifs_ReportVerification } from 'src/app/core/shared/models/Dxc_Model_Cifs_ReportVerification';

@Component({
  selector: 'app-list-left-report-verification',
  templateUrl: './list-left-report-verification.component.html',
  styleUrls: ['./list-left-report-verification.component.scss']
})
export class ListLeftReportVerificationComponent implements OnInit {

  cifsReportVerificationResults: IDxc_Model_Cifs_ReportVerification[];
  checkCifsReportVerificationResults: boolean;
  constructor(private ReportCifsReportVerification: CifsReportVerificationMetadata) { }

  ngOnInit() {
    this.ReportCifsReportVerification.getSearchData();
    this.cifsReportVerificationResults = this.ReportCifsReportVerification.$results;
    if(this.cifsReportVerificationResults.length !== 0 ){
      this.checkCifsReportVerificationResults = true;
    } else {
      this.checkCifsReportVerificationResults = false;
    }
  }

}
