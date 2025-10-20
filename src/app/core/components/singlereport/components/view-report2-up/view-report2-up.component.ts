import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dopa_Moi_Persons } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Persons';
import { DopaMoiPersonsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.interface';
import { IDxc_Model_Oncb_NarcoticOffender } from 'src/app/core/shared/models/Dxc_Model_Oncb_NarcoticOffender';
import { OncbNarcoticOffenderMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';

@Component({
  selector: 'app-view-report2-up',
  templateUrl: './view-report2-up.component.html',
  styleUrls: ['./view-report2-up.component.scss']
})
export class ViewReport2UpComponent implements OnInit {

  moidopapersonResults: IDxc_Model_Dopa_Moi_Persons[];
  oncbnarcoticoffenderResults: IDxc_Model_Oncb_NarcoticOffender[];
  constructor(
    private ReportDopaMoiPersons: DopaMoiPersonsMetadata ,  private ReportOncbNarcoticOffender: OncbNarcoticOffenderMetadata,) { }

  ngOnInit() {
    this.ReportDopaMoiPersons.getSearchData();
    this.moidopapersonResults = this.ReportDopaMoiPersons.$results;
    this.ReportOncbNarcoticOffender.getSearchData();
    this.oncbnarcoticoffenderResults = this.ReportOncbNarcoticOffender.$results;
  }


}
