import { Dxc_Model_Moi_Dopa_ThaiIdcard } from './../../../../../../shared/models/Dxc_Model_Dopa_Moi_Thaiidcard';
import { Component, OnInit } from '@angular/core';
import { DopaMoiThaiidcardMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-thaiidcard/dxc-model-dopa-moi-thaiidcard.interface';

@Component({
  selector: 'app-list-left-thaiidcard',
  templateUrl: './list-left-thaiidcard.component.html',
  styleUrls: ['./list-left-thaiidcard.component.scss'],
  providers: [
    DopaMoiThaiidcardMetadata
  ]
})
export class ListLeftThaiidcardComponent implements OnInit {
  MoiDopaThaiIdcardResults: Dxc_Model_Moi_Dopa_ThaiIdcard[];
  checkMoiDopaThaiIdcardResults: boolean;

  constructor(private ReportDopaMoiThaiidcard: DopaMoiThaiidcardMetadata) {
  }

  ngOnInit() {
    this.ReportDopaMoiThaiidcard.getSearchData();
    this.MoiDopaThaiIdcardResults = this.ReportDopaMoiThaiidcard.$results;

    if (this.MoiDopaThaiIdcardResults.length !== 0) {
      this.checkMoiDopaThaiIdcardResults = true;
    } else {
      this.checkMoiDopaThaiIdcardResults = false;
    }
  }

}
