import { Component, OnInit } from '@angular/core';
import { RtpCriminalMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-criminal/dxc-model-rtp-criminal.interface';
import { IDxc_Model_Rtp_Criminal } from 'src/app/core/shared/models/Dxc_Model_Rtp_Criminal';

@Component({
  selector: 'app-list-contact-criminal',
  templateUrl: './list-contact-criminal.component.html',
  styleUrls: ['./list-contact-criminal.component.scss']
})
export class ListContactCriminalComponent implements OnInit {

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
