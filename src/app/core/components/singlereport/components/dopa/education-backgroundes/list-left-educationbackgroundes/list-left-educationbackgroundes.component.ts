import { Dxc_Model_Moi_Dopa_Education_Backgroundes } from './../../../../../../shared/models/Dxc_Model_Dopa_Moi_Education_Backgroundes';
import { Component, OnInit } from '@angular/core';
import { DopaMoiEducationBackgroundesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-education-backgroundes/dxc-model-dopa-moi-education-backgroundes.interface';

@Component({
  selector: 'app-list-left-educationbackgroundes',
  templateUrl: './list-left-educationbackgroundes.component.html',
  styleUrls: ['./list-left-educationbackgroundes.component.scss'],
  providers: [
    DopaMoiEducationBackgroundesMetadata
  ]
})
export class ListLeftEducationbackgroundesComponent implements OnInit {
  MoiDopaEducationBackgroundesResults: Dxc_Model_Moi_Dopa_Education_Backgroundes[];
  checkMoiDopaEducationBackgroundesResults: boolean;

  constructor(private ReportDopaMoiEducationBackgroundes: DopaMoiEducationBackgroundesMetadata) {
  }

  ngOnInit() {
    this.ReportDopaMoiEducationBackgroundes.getSearchData();
    this.MoiDopaEducationBackgroundesResults = this.ReportDopaMoiEducationBackgroundes.$results;
    console.log(this.MoiDopaEducationBackgroundesResults);
    if (this.MoiDopaEducationBackgroundesResults.length !== 0) {
      this.checkMoiDopaEducationBackgroundesResults = true;
    } else {
      this.checkMoiDopaEducationBackgroundesResults = false;
    }
  }
}