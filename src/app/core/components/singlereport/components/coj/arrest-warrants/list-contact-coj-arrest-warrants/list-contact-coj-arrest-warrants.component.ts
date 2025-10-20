import { Component, OnInit } from '@angular/core';
import { CojArrestWarrantsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-coj-arrest-warrants/dxc-model-coj-arrest-warrants.interface';
import { IDxc_Model_Coj_ArrestWarrants } from 'src/app/core/shared/models/Dxc_Model_Coj_ArrestWarrants';

@Component({
  selector: 'app-list-contact-coj-arrest-warrants',
  templateUrl: './list-contact-coj-arrest-warrants.component.html',
  styleUrls: ['./list-contact-coj-arrest-warrants.component.scss']
})
export class ListContactCojArrestWarrantsComponent implements OnInit {

  arrestWarrantsResults: IDxc_Model_Coj_ArrestWarrants[];
  arrestWarrantsCount: number;
  report_name: string;
  exitCode: any;
  constructor(private ReportCojArrestWarrants: CojArrestWarrantsMetadata) { }

  ngOnInit() {
    this.ReportCojArrestWarrants.getSearchDataContact();
    this.arrestWarrantsResults = this.ReportCojArrestWarrants.$resultsContact;
    this.arrestWarrantsCount = this.ReportCojArrestWarrants.$countContact;
    this.exitCode = this.arrestWarrantsResults;
    this.report_name = localStorage.getItem('report_name');
  }

}
