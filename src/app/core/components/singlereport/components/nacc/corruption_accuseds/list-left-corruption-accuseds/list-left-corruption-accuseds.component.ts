import { Component, OnInit } from '@angular/core';
import { NaccMoiCorruptionAccusedsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-nacc-moi-corruption-accuseds/dxc-model-nacc-moi-corruption-accuseds.interface';
import { IDxc_Model_Nacc_Moi_Corruption_Accuseds } from 'src/app/core/shared/models/Dxc_Model_Nacc_Moi_Corruption_Accuseds';

@Component({
  selector: 'app-list-left-corruption-accuseds',
  templateUrl: './list-left-corruption-accuseds.component.html',
  styleUrls: ['./list-left-corruption-accuseds.component.scss']
})
export class ListLeftCorruptionAccusedsComponent implements OnInit {
  corruptionResults: IDxc_Model_Nacc_Moi_Corruption_Accuseds[];
  checkCorruptionResults: boolean;
  constructor(
    private ReportNaccCorruptionaccuseds:NaccMoiCorruptionAccusedsMetadata
  ) { }

  ngOnInit() {
    this.ReportNaccCorruptionaccuseds.getSearchData();
    this.corruptionResults = this.ReportNaccCorruptionaccuseds.$results;

    if(this.corruptionResults.length !== 0) {
      this.checkCorruptionResults = true;
    } else {
      this.checkCorruptionResults = false;
    }
  }

}
