import { Component, OnInit } from '@angular/core';
import { DopaMoiPor4Metadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-por4/dxc-model-dopa-moi-por4.interface';
import { IDxc_Model_Dopa_MoiDopaPor4Licenses } from 'src/app/core/shared/models/Dxc_Model_Dopa_MoiDopaPor4Licenses';

@Component({
  selector: 'app-list-table-contact-por4',
  templateUrl: './list-table-contact-por4.component.html',
  styleUrls: ['./list-table-contact-por4.component.scss']
})
export class ListTableContactPor4Component implements OnInit {

  moidopapor4Results: IDxc_Model_Dopa_MoiDopaPor4Licenses[];
  moidopapor4Count: number;
  report_name: string;
  constructor(private ReportDopaMoiPor4: DopaMoiPor4Metadata) { }

  ngOnInit() {
    this.ReportDopaMoiPor4.getSearchDataContact();
    this.moidopapor4Results = this.ReportDopaMoiPor4.$resultsContact;
    this.moidopapor4Count = this.ReportDopaMoiPor4.$countContact;
    this.report_name = localStorage.getItem('report_name');
  }

}
