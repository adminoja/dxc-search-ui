import { Component, OnInit } from '@angular/core';
import { CojArrestWarrantsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-coj-arrest-warrants/dxc-model-coj-arrest-warrants.interface';
import { IDxc_Model_Coj_ArrestWarrants } from 'src/app/core/shared/models/Dxc_Model_Coj_ArrestWarrants';

@Component({
  selector: 'app-list-left-coj-arrest-warrants',
  templateUrl: './list-left-coj-arrest-warrants.component.html',
  styleUrls: ['./list-left-coj-arrest-warrants.component.scss']
})
export class ListLeftCojArrestWarrantsComponent implements OnInit {

  arrestWarrantsResults: IDxc_Model_Coj_ArrestWarrants[];
  checkarrestWarrantsResults: boolean;
  constructor(private ReportCojArrestWarrants: CojArrestWarrantsMetadata) { }

  ngOnInit() {

    this.ReportCojArrestWarrants.getSearchData();
    this.arrestWarrantsResults = this.ReportCojArrestWarrants.$results;
    console.log('this.thailandPassporResults');
    console.log(this.arrestWarrantsResults);

    if (this.arrestWarrantsResults.length !== 0) {
      this.checkarrestWarrantsResults = true;
    } else {
      this.checkarrestWarrantsResults = false;
    }

  }

}
