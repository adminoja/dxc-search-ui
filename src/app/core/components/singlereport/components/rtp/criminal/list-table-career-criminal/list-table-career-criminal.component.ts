import { Component, OnInit } from '@angular/core';
import { RtpCriminalMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-criminal/dxc-model-rtp-criminal.interface';
import { IDxc_Model_Rtp_Criminal } from 'src/app/core/shared/models/Dxc_Model_Rtp_Criminal';

@Component({
  selector: 'app-list-table-career-criminal',
  templateUrl: './list-table-career-criminal.component.html',
  styleUrls: ['./list-table-career-criminal.component.scss']
})
export class ListTableCareerCriminalComponent implements OnInit {

  criminalResults: IDxc_Model_Rtp_Criminal[];
  criminalCount: number;
  report_name: string;
  exitCode: any;

  constructor(private ReportRtpCriminal: RtpCriminalMetadata) { }

  ngOnInit() {
    this.ReportRtpCriminal.getSearchDataContact();
    this.criminalResults = this.ReportRtpCriminal.$resultsContact;
    this.criminalCount = this.ReportRtpCriminal.$countContact;
    this.exitCode = this.criminalResults;
    this.report_name = localStorage.getItem('report_name');
  }


}
