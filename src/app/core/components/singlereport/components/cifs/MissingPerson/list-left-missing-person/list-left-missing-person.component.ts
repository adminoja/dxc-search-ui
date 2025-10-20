import { Component, OnInit } from '@angular/core';
import { Dxc_Model_Cifs_MissingPerson } from 'src/app/core/shared/models/Dxc_Model_Cifs_MissingPerson';
import { CifsMissingPersonMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-cifs-missing-person/dxc-model-cifs-missing_person.interface';

@Component({
  selector: 'app-list-left-missing-person',
  templateUrl: './list-left-missing-person.component.html',
  styleUrls: ['./list-left-missing-person.component.scss']
})
export class ListLeftMissingPersonComponent implements OnInit {
  cifsMissingPersonResults: Dxc_Model_Cifs_MissingPerson[];
  checkCifsMissingPersonResults: boolean;
  constructor(private ReportCifsMissingPerson: CifsMissingPersonMetadata) { }

  ngOnInit() {
    this.ReportCifsMissingPerson.getSearchData();
    this.cifsMissingPersonResults = this.ReportCifsMissingPerson.$results;
    if(this.cifsMissingPersonResults.length !== 0 ){
      this.checkCifsMissingPersonResults = true;
    } else {
      this.checkCifsMissingPersonResults = false;
    }
  }

}
