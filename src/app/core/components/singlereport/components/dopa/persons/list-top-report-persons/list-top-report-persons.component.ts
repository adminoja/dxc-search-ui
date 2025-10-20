import { Component, OnInit } from '@angular/core';
import { DopaMoiPersonsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.interface';
import { IDxc_Model_Dopa_Moi_Persons } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Persons';

@Component({
  selector: 'app-list-top-report-persons',
  templateUrl: './list-top-report-persons.component.html',
  styleUrls: ['./list-top-report-persons.component.scss'],
  providers: [
    DopaMoiPersonsMetadata
  ]
})
export class ListTopReportPersonsComponent implements OnInit {

  personsResults: IDxc_Model_Dopa_Moi_Persons[];
  personsShow: boolean;

  constructor(private ReportMoiDopaPersons: DopaMoiPersonsMetadata) { }

  ngOnInit() {
    this.ReportMoiDopaPersons.getSearchData();
    this.personsResults = this.ReportMoiDopaPersons.$results;

    if (this.personsResults.length !== 0) {
      this.personsShow = true;
    } else {
      this.personsShow = false;
    }
  }

}
