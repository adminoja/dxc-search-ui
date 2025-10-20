import { Component, OnInit } from '@angular/core';
import { DopaMoiPor4Metadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-por4/dxc-model-dopa-moi-por4.interface';
import { IDxc_Model_Dopa_MoiDopaPor4Licenses } from 'src/app/core/shared/models/Dxc_Model_Dopa_MoiDopaPor4Licenses';

@Component({
  selector: 'app-list-left-por4',
  templateUrl: './list-left-por4.component.html',
  styleUrls: ['./list-left-por4.component.scss'],
  providers: [
    DopaMoiPor4Metadata
  ]
})
export class ListLeftPor4Component implements OnInit {
  moidopapor4Results: IDxc_Model_Dopa_MoiDopaPor4Licenses[];

  constructor(private ReportDopaMoiPor4: DopaMoiPor4Metadata) { }

  ngOnInit() {
    this.ReportDopaMoiPor4.getSearchData();
    this.moidopapor4Results = this.ReportDopaMoiPor4.$results;
  }

}
