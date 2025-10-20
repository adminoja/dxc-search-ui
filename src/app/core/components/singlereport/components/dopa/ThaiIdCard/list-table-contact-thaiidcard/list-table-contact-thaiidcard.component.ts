import { Component, OnInit } from '@angular/core';
import { DopaMoiThaiidcardMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-thaiidcard/dxc-model-dopa-moi-thaiidcard.interface';
import { Dxc_Model_Moi_Dopa_ThaiIdcard } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Thaiidcard';

@Component({
  selector: 'app-list-table-contact-thaiidcard',
  templateUrl: './list-table-contact-thaiidcard.component.html',
  styleUrls: ['./list-table-contact-thaiidcard.component.scss']
})
export class ListTableContactThaiidcardComponent implements OnInit {

  MoiDopaThaiIdcardResults: Dxc_Model_Moi_Dopa_ThaiIdcard[];
  MoiDopaThaiIdcardTableCount: number;
  report_name: string;
  constructor(private ReportDopaMoiThaiidcard: DopaMoiThaiidcardMetadata) { }

  ngOnInit() {
    this.ReportDopaMoiThaiidcard.getSearchDataContact();
    this.MoiDopaThaiIdcardResults = this.ReportDopaMoiThaiidcard.$resultsContact;
    this.MoiDopaThaiIdcardTableCount = this.ReportDopaMoiThaiidcard.$countContact;
    this.report_name = localStorage.getItem('report_name');
  }

}
