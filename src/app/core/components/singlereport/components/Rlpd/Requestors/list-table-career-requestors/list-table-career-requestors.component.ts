import { Component, OnInit } from '@angular/core';
import { RlpdRequestorsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.interface';
import { Dxc_Model_Rlpd_Requestors } from 'src/app/core/shared/models/Dxc_Model_Rlpd_Requestors';

@Component({
  selector: 'app-list-table-career-requestors',
  templateUrl: './list-table-career-requestors.component.html',
  styleUrls: ['./list-table-career-requestors.component.scss']
})
export class ListTableCareerRequestorsComponent implements OnInit {

  requestorsResults: Dxc_Model_Rlpd_Requestors[];
  requestorsCount: number;
  report_name: string;
  exitCode: any;
  
  constructor(private ReportRlpdRequestors: RlpdRequestorsMetadata) { }

  ngOnInit() {
    this.ReportRlpdRequestors.getSearchDataCareer();
    this.requestorsResults = this.ReportRlpdRequestors.$resultsCareer;
    this.requestorsCount = this.ReportRlpdRequestors.$countCareer;
    this.exitCode = this.requestorsResults;
    this.report_name = localStorage.getItem('report_name');
  }

}
