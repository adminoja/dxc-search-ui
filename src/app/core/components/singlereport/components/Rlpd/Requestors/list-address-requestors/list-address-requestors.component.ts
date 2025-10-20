import { Component, OnInit } from '@angular/core';
import { Dxc_Model_Rlpd_Requestors } from 'src/app/core/shared/models/Dxc_Model_Rlpd_Requestors';
import { RlpdRequestorsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.interface';

@Component({
  selector: 'app-list-address-requestors',
  templateUrl: './list-address-requestors.component.html',
  styleUrls: ['./list-address-requestors.component.scss']
})
export class ListAddressRequestorsComponent implements OnInit {

  requestorsResults: Dxc_Model_Rlpd_Requestors[];
  constructor(private ReportRlpdRequestors: RlpdRequestorsMetadata) { }

  ngOnInit() {
    this.ReportRlpdRequestors.getSearchData();
    this.requestorsResults = this.ReportRlpdRequestors.$results;
  }

}
