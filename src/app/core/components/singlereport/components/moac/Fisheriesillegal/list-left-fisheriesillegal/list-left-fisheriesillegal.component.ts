import { Dxc_Model_Moi_Moac_Fisheries_Illegal } from './../../../../../../shared/models/Dxc_Model_Moac_Moi_Fisheries_Illegal';
import { MoacMoiFisheriesIllegalMetadata } from './../../../../../localsearch/qmreporttemplate/dxc-model-moac-moi-fisheries-illegal/dxc-model-moac-moi-fisheries-illegal.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-left-fisheriesillegal',
  templateUrl: './list-left-fisheriesillegal.component.html',
  styleUrls: ['./list-left-fisheriesillegal.component.scss'],
  providers: [
    MoacMoiFisheriesIllegalMetadata
  ]
})
export class ListLeftFisheriesillegalComponent implements OnInit {
  MoacMoiFisheriesIllegal: Dxc_Model_Moi_Moac_Fisheries_Illegal[];
  checkMoacMoiFisheriesIllegal: boolean;
  constructor(private ReportMoacMoiFisheriesIllegalMetadata: MoacMoiFisheriesIllegalMetadata) {
  }
  ngOnInit() {
    this.ReportMoacMoiFisheriesIllegalMetadata.getSearchData();
    this.MoacMoiFisheriesIllegal = this.ReportMoacMoiFisheriesIllegalMetadata.$results;

    if (this.MoacMoiFisheriesIllegal !== undefined) {
      this.checkMoacMoiFisheriesIllegal = true;
    } else {
      this.checkMoacMoiFisheriesIllegal = false;
    }
  }

}
