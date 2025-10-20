import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dopa_Moi_Persons } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Persons';
import { DopaMoiPersonsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.interface';

@Component({
  selector: 'app-list-left-persons',
  templateUrl: './list-left-persons.component.html',
  styleUrls: ['./list-left-persons.component.scss'],
  providers: [
    DopaMoiPersonsMetadata
  ]
})
export class ListLeftPersonsComponent implements OnInit {
  moidopapersonResults: IDxc_Model_Dopa_Moi_Persons[];
  checkmoidopapersonResults: boolean;

  constructor(private ReportDopaMoiPersons: DopaMoiPersonsMetadata) { }

  ngOnInit() {
    this.ReportDopaMoiPersons.getSearchData();
    this.moidopapersonResults = this.ReportDopaMoiPersons.$results;

    if (this.moidopapersonResults.length !== 0) {
      this.checkmoidopapersonResults = true;
    } else {
      this.checkmoidopapersonResults = false;
    }
  }

}
