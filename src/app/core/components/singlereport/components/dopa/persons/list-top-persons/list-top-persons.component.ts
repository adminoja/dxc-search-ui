import { Component, OnInit } from '@angular/core';
import { DopaMoiPersonsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.interface';
import { IDxc_Model_Dopa_Moi_Persons } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Persons';

@Component({
  selector: 'app-list-top-persons',
  templateUrl: './list-top-persons.component.html',
  styleUrls: ['./list-top-persons.component.scss'],
  providers: [
    DopaMoiPersonsMetadata
  ]
})
export class ListTopPersonsComponent implements OnInit {

  personsResults: IDxc_Model_Dopa_Moi_Persons[];
  testimage: string;
  imageSrc: string;
  personsShow: boolean;
  constructor(private ReportMoiDopaPersons: DopaMoiPersonsMetadata) { }

  ngOnInit() {
    this.ReportMoiDopaPersons.getSearchData();
    this.personsResults = this.ReportMoiDopaPersons.$results;
    if (this.personsResults.length !== 0 ) {
      // this.imageEncode(this.citizenResults[0].image);
      this.personsShow = true;
      console.log('else')
      console.log(this.personsShow)
    } else {
      console.log('else')
      console.log(this.personsShow)

      this.personsShow = false;
    }
  }

}
