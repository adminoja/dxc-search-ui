import { Component, OnInit } from '@angular/core';
import { DopProbationerMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dop-probationer/dxc-model-dop-probationer.interface';
import { IDxc_Model_Dop_Probationer } from 'src/app/core/shared/models/Dxc_Model_Dop_Probationer';

@Component({
  selector: 'app-list-table-contact-probations',
  templateUrl: './list-table-contact-probations.component.html',
  styleUrls: ['./list-table-contact-probations.component.scss']
})
export class ListTableContactProbationsComponent implements OnInit {

  probationerResults: IDxc_Model_Dop_Probationer[];
  probationerCount: number;
  report_name: string;
  exitCode: any;
  constructor(private ReportDopProbationer: DopProbationerMetadata) { }

  ngOnInit() {
    this.ReportDopProbationer.getSearchDataContact();
    this.probationerResults = this.ReportDopProbationer.$resultsContact;
    this.probationerCount = this.ReportDopProbationer.$countContact;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.probationerResults
  }

}
