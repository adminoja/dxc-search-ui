import { Component, OnInit } from '@angular/core';
import { DolLandAndCondominiumTitlesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dol-land-and-condominium-titles/dxc-model-dol-land-and-condominium-titles.interface';
import { IDxc_Model_Dol_Land_and_Condominium_Titles } from 'src/app/core/shared/models/Dxc_Model_Dol_Land_and_Condominium_Titles';

@Component({
  selector: 'app-list-left-land-and-condominium-titles',
  templateUrl: './list-left-land-and-condominium-titles.component.html',
  styleUrls: ['./list-left-land-and-condominium-titles.component.scss']
})
export class ListLeftLandAndCondominiumTitlesComponent implements OnInit {
  landAndCondominiumTitlesResults: IDxc_Model_Dol_Land_and_Condominium_Titles[];
  checklandAndCondominiumTitlesResults: boolean;
  constructor(private ReportDolLandAndCondominiumTitles: DolLandAndCondominiumTitlesMetadata) { }

  ngOnInit() {
    this.ReportDolLandAndCondominiumTitles.getSearchData();
    this.landAndCondominiumTitlesResults = this.ReportDolLandAndCondominiumTitles.$results;
    console.log('this.landAndCondominiumTitlesResults');
    console.log(this.landAndCondominiumTitlesResults);

    if (this.landAndCondominiumTitlesResults.length !== 0) {
      this.checklandAndCondominiumTitlesResults = true;
    } else {
      this.checklandAndCondominiumTitlesResults = false;
    }
  }

}
