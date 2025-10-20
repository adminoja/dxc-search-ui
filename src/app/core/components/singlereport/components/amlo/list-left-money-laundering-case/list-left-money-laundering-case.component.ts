import { Component, OnInit } from '@angular/core';
import { AmloMoneylaunderingcaseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-amlo-money-laundering-case/dxc-model-amlo-money-laundering-case.interface';
import { IDxc_Model_Amlo_Moneylaunderingcase } from 'src/app/core/shared/models/Dxc_Model_Amlo_Moneylaunderingcase';

@Component({
  selector: 'app-list-left-money-laundering-case',
  templateUrl: './list-left-money-laundering-case.component.html',
  styleUrls: ['./list-left-money-laundering-case.component.scss']
})
export class ListLeftMoneyLaunderingCaseComponent implements OnInit {
  moneylaunderingcaseResults: IDxc_Model_Amlo_Moneylaunderingcase[];
  constructor(private ReportAmloMoneyLaunderingCase: AmloMoneylaunderingcaseMetadata) { }

  ngOnInit() {
    this.ReportAmloMoneyLaunderingCase.getSearchData();
    this.moneylaunderingcaseResults = this.ReportAmloMoneyLaunderingCase.getResults();
  }

}
