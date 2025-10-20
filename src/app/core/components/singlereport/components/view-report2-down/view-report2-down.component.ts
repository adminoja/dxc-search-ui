import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dopa_Moi_Persons } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Persons';
import { DopaMoiPersonsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.interface';
import { Dxc_Model_Doc_Prisoner } from 'src/app/core/shared/models/Dxc_Model_Doc_Prisoner';
import { DocPrisonerMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.interface';

@Component({
  selector: 'app-view-report2-down',
  templateUrl: './view-report2-down.component.html',
  styleUrls: ['./view-report2-down.component.scss']
})
export class ViewReport2DownComponent implements OnInit {
  prisonerResults: Dxc_Model_Doc_Prisoner[];
  moidopapersonResults: IDxc_Model_Dopa_Moi_Persons[];
  constructor(
    private ReportDopaMoiPersons: DopaMoiPersonsMetadata , private ReportDocPrisoner: DocPrisonerMetadata) { }

  ngOnInit() {
    this.ReportDopaMoiPersons.getSearchData();
    this.moidopapersonResults = this.ReportDopaMoiPersons.$results;
    this.ReportDocPrisoner.getSearchData();
    this.prisonerResults = this.ReportDocPrisoner.$results;
  }

}
