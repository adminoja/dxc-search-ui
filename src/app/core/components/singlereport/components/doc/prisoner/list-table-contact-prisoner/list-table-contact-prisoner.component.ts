import { Component, OnInit } from '@angular/core';
import { DocPrisonerMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.interface';
import { Dxc_Model_Doc_Prisoner } from 'src/app/core/shared/models/Dxc_Model_Doc_Prisoner';

@Component({
  selector: 'app-list-table-contact-prisoner',
  templateUrl: './list-table-contact-prisoner.component.html',
  styleUrls: ['./list-table-contact-prisoner.component.scss']
})
export class ListTableContactPrisonerComponent implements OnInit {

  prisonerResults: Dxc_Model_Doc_Prisoner[];
  prisonerCount: number;
  report_name: string;
  exitCode: any;
  constructor(private ReportDocPrisoner: DocPrisonerMetadata) { }

  ngOnInit() {
    this.ReportDocPrisoner.getSearchDataContact();
    this.prisonerResults = this.ReportDocPrisoner.$resultsContact;
    this.prisonerCount = this.ReportDocPrisoner.$countContact;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.prisonerResults
  }

}
