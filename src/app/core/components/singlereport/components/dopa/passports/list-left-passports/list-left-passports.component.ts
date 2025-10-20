import { IDxc_Model_Moi_Dopa_Passports } from './../../../../../../shared/models/Dxc_Model_Dopa_Moi_Passports';
import { Component, OnInit } from '@angular/core';
import { DopaMoiPassportsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-passports/dxc-model-dopa-moi-passports.interface';

@Component({
  selector: 'app-list-left-passports',
  templateUrl: './list-left-passports.component.html',
  styleUrls: ['./list-left-passports.component.scss'],
  providers: [
    DopaMoiPassportsMetadata
  ]
})
export class ListLeftPassportsComponent implements OnInit {

  moiDopaPassportsResults: IDxc_Model_Moi_Dopa_Passports[];
  checkmoiDopaPassportsResults: boolean;

  constructor(private ReportMoiDopaPassports: DopaMoiPassportsMetadata) { }
  ngOnInit() {
    this.ReportMoiDopaPassports.getSearchData();
    this.moiDopaPassportsResults = this.ReportMoiDopaPassports.$results;

    if (this.moiDopaPassportsResults.length !== 0) {
      this.checkmoiDopaPassportsResults = true;
    } else {
      this.checkmoiDopaPassportsResults = false;
    }
  }

}
