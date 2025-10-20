import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dsd_Moi_Workforce_Developments } from 'src/app/core/shared/models/Dxc_Model_Dsd_Moi_Workforce_Developments';
import { DsdMoiWorkforceDevelopmentsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dsd-moi-workforce-developments/dxc-model-dsd-moi-workforce-developments.interface';

@Component({
  selector: 'app-list-left-workforce-developments',
  templateUrl: './list-left-workforce-developments.component.html',
  styleUrls: ['./list-left-workforce-developments.component.scss'],
  providers: [
    DsdMoiWorkforceDevelopmentsMetadata
  ]
})
export class ListLeftWorkforceDevelopmentsComponent implements OnInit {
  moiDsdWorkforceDevelopmentsResults: IDxc_Model_Dsd_Moi_Workforce_Developments[];
  checkMoiDsdWorkforceDevelopmentsResults: boolean;
  constructor(private ReportMoiDsdWorkforceDevelopments: DsdMoiWorkforceDevelopmentsMetadata) { }

  ngOnInit() {
    this.ReportMoiDsdWorkforceDevelopments.getSearchData();
    this.moiDsdWorkforceDevelopmentsResults = this.ReportMoiDsdWorkforceDevelopments.$results;

    if(this.moiDsdWorkforceDevelopmentsResults.length !== 0) {
      this.checkMoiDsdWorkforceDevelopmentsResults = true;
    } else {
      this.checkMoiDsdWorkforceDevelopmentsResults = false;
    }
  }

}
