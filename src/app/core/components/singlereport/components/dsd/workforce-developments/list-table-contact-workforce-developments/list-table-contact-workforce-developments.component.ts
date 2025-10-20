import { Component, OnInit } from '@angular/core';
import { DsdMoiWorkforceDevelopmentsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dsd-moi-workforce-developments/dxc-model-dsd-moi-workforce-developments.interface';
import { IDxc_Model_Dsd_Moi_Workforce_Developments } from 'src/app/core/shared/models/Dxc_Model_Dsd_Moi_Workforce_Developments';

@Component({
  selector: 'app-list-table-contact-workforce-developments',
  templateUrl: './list-table-contact-workforce-developments.component.html',
  styleUrls: ['./list-table-contact-workforce-developments.component.scss']
})
export class ListTableContactWorkforceDevelopmentsComponent implements OnInit {

  moiDsdWorkforceDevelopmentsResults: IDxc_Model_Dsd_Moi_Workforce_Developments[];
  moiDsdWorkforceDevelopmentsCount: number;
  report_name: string;
  constructor(private ReportMoiDsdWorkforceDevelopments: DsdMoiWorkforceDevelopmentsMetadata) { }

  ngOnInit() {
    this.ReportMoiDsdWorkforceDevelopments.getSearchDataContact();
    this.moiDsdWorkforceDevelopmentsResults = this.ReportMoiDsdWorkforceDevelopments.$resultsContact;
    this.moiDsdWorkforceDevelopmentsCount = this.ReportMoiDsdWorkforceDevelopments.$countContact;
    this.report_name = localStorage.getItem('report_name');
  }

}
