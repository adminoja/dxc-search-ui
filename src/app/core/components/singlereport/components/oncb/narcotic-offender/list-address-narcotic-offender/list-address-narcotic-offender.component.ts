import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Oncb_NarcoticOffender } from 'src/app/core/shared/models/Dxc_Model_Oncb_NarcoticOffender';
import { OncbNarcoticOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';

@Component({
  selector: 'app-list-address-narcotic-offender',
  templateUrl: './list-address-narcotic-offender.component.html',
  styleUrls: ['./list-address-narcotic-offender.component.scss']
})
export class ListAddressNarcoticOffenderComponent implements OnInit {
  narcoticOffenderResults: IDxc_Model_Oncb_NarcoticOffender[];

  constructor( private ReportOncNarcoticOffender: OncbNarcoticOffenderMetadata) { }

  ngOnInit() {
    this.ReportOncNarcoticOffender.getSearchData();
    this.narcoticOffenderResults = this.ReportOncNarcoticOffender.$results;
  }

}
