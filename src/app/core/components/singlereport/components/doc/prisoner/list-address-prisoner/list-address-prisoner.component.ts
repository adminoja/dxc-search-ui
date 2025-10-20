import { Component, OnInit } from '@angular/core';
import { Dxc_Model_Doc_Prisoner } from 'src/app/core/shared/models/Dxc_Model_Doc_Prisoner';
import { DocPrisonerMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.interface';

@Component({
  selector: 'app-list-address-prisoner',
  templateUrl: './list-address-prisoner.component.html',
  styleUrls: ['./list-address-prisoner.component.scss']
})
export class ListAddressPrisonerComponent implements OnInit {
  prisonerResults: Dxc_Model_Doc_Prisoner[];

  constructor(private ReportDocPrisoner: DocPrisonerMetadata) {
  }


  ngOnInit() {
    this.ReportDocPrisoner.getSearchData();
    this.prisonerResults = this.ReportDocPrisoner.$results;
  }

}
