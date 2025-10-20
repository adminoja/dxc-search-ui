import { Component, OnInit } from '@angular/core';
import { RlpdRequestorsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.interface';
import { Dxc_Model_Rlpd_Requestors } from 'src/app/core/shared/models/Dxc_Model_Rlpd_Requestors';

@Component({
  selector: 'app-list-contact-requestors',
  templateUrl: './list-contact-requestors.component.html',
  styleUrls: ['./list-contact-requestors.component.scss']
})
export class ListContactRequestorsComponent implements OnInit {

  requestorsResults: Dxc_Model_Rlpd_Requestors[];
  requestorsCount: number;
  report_name: string;
  exitCode: any;
  constructor(private ReportRlpdRequestors: RlpdRequestorsMetadata) { }

  ngOnInit() {
    this.ReportRlpdRequestors.getSearchDataContact();
    this.requestorsResults = this.ReportRlpdRequestors.$resultsContact;
    this.requestorsCount = this.ReportRlpdRequestors.$countContact;
    this.exitCode = this.requestorsResults;
    this.report_name = localStorage.getItem('report_name');
  }

}
