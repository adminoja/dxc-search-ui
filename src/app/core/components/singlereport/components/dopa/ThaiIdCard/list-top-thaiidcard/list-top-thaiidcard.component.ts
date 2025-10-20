import { Component, OnInit } from '@angular/core';
import { DopaMoiThaiidcardMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-thaiidcard/dxc-model-dopa-moi-thaiidcard.interface';
import { Dxc_Model_Moi_Dopa_ThaiIdcard } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Thaiidcard';

@Component({
  selector: 'app-list-top-thaiidcard',
  templateUrl: './list-top-thaiidcard.component.html',
  styleUrls: ['./list-top-thaiidcard.component.scss'],
  providers: [ DopaMoiThaiidcardMetadata ]
})
export class ListTopThaiidcardComponent implements OnInit {

  MoiDopaThaiIdcardResults: Dxc_Model_Moi_Dopa_ThaiIdcard[];
  MoiDopaThaiIdcardShow: boolean;
  thaiNin: any;
  constructor(private ReportDopaMoiThaiidcard: DopaMoiThaiidcardMetadata) { }

  ngOnInit() {
    this.ReportDopaMoiThaiidcard.getSearchData();
    this.MoiDopaThaiIdcardResults = this.ReportDopaMoiThaiidcard.$results;
    this.thaiNin = localStorage.getItem('thaiNin');
    if (this.MoiDopaThaiIdcardResults.length !== 0) {
      this.MoiDopaThaiIdcardShow = true;
    } else {
      this.MoiDopaThaiIdcardShow = false;
    }
    
  }

}
