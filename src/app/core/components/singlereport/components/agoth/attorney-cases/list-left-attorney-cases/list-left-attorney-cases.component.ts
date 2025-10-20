import { Component, OnInit } from '@angular/core';
import { AgothAttorneyCasesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-agoth-attorney-cases/dxc-model-agoth-attorney-cases.interface';
import { IDxc_Model_Agoth_AttorneyMainCases } from 'src/app/core/shared/models/Dxc_Model_Agoth_AttorneyMainCases';

@Component({
  selector: 'app-list-left-attorney-cases',
  templateUrl: './list-left-attorney-cases.component.html',
  styleUrls: ['./list-left-attorney-cases.component.scss'],
  providers: [AgothAttorneyCasesMetadata]
})
export class ListLeftAttorneyCasesComponent implements OnInit {
  attorneyCasesResults: IDxc_Model_Agoth_AttorneyMainCases[];

  constructor(private ReportAgothAttorneyCases: AgothAttorneyCasesMetadata) { }

  ngOnInit() {
    this.ReportAgothAttorneyCases.getSearchData();
    this.attorneyCasesResults = this.ReportAgothAttorneyCases.$results;
  }

}
