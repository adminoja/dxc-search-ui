import { Component, OnInit } from '@angular/core';
import { DocRemandeeMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-remandee/dxc-model-doc-remandee/dxc-model-doc-remandee.interface';
import { Dxc_Model_Doc_Remandee } from 'src/app/core/shared/models/Dxc_Model_Doc_Remandee';

@Component({
  selector: 'app-list-table-contact-remandee',
  templateUrl: './list-table-contact-remandee.component.html',
  styleUrls: ['./list-table-contact-remandee.component.scss']
})
export class ListTableContactRemandeeComponent implements OnInit {

  remandeeResults: Dxc_Model_Doc_Remandee[];
  remandeeCount: number;
  report_name: string;
  exitCode: any;
  constructor(private ReportDocRemandee: DocRemandeeMetadata) { }

  ngOnInit() {
    this.ReportDocRemandee.getSearchDataContact();
    this.remandeeResults = this.ReportDocRemandee.$resultsContact;
    this.remandeeCount = this.ReportDocRemandee.$countContact;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.remandeeResults
  }

}
