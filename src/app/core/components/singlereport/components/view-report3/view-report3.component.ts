import { Dxc_Model_Djop_JuvenileOffender } from './../../../../shared/models/Dxc_Model_Djop_JuvenileOffender';
import { IDxc_Model_Oncb_NarcoticOffender } from './../../../../shared/models/Dxc_Model_Oncb_NarcoticOffender';
import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dopa_Moi_Persons } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Persons';
import { DopaMoiPersonsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.interface';
import { OncbNarcoticOffenderMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';
import { DjopJuvenileOffenderMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender/dxc-model-djop-juvenile-offender.interface';

@Component({
  selector: 'app-view-report3',
  templateUrl: './view-report3.component.html',
  styleUrls: ['./view-report3.component.scss']
})
export class ViewReport3Component implements OnInit {

  moidopapersonResults: IDxc_Model_Dopa_Moi_Persons[];
  oncbnarcoticoffenderResults: IDxc_Model_Oncb_NarcoticOffender[];
  juvenileoffenderResults: Dxc_Model_Djop_JuvenileOffender[];


  constructor(
    private ReportDopaMoiPersons: DopaMoiPersonsMetadata,
    private ReportOncbNarcoticOffender: OncbNarcoticOffenderMetadata,
    private ReportDjopJuvenileOffender: DjopJuvenileOffenderMetadata) { }

  ngOnInit() {
    this.ReportDopaMoiPersons.getSearchData();
    this.moidopapersonResults = this.ReportDopaMoiPersons.$results;
    this.ReportOncbNarcoticOffender.getSearchData();
    this.oncbnarcoticoffenderResults = this.ReportOncbNarcoticOffender.$results;
    this.ReportDjopJuvenileOffender.getSearchData();
    this.juvenileoffenderResults = this.ReportDjopJuvenileOffender.$results;

  }

}
