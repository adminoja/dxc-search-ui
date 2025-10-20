import { Component, OnInit } from '@angular/core';
import { AgothChargeSubjectMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-agoth-charge-subjects/dxc-model-agoth-charge-subjects.interface';
import { IDxc_Model_Agoth_ChargeSubject } from 'src/app/core/shared/models/Dxc_Model_Agoth_ChargeSubject';

@Component({
  selector: 'app-list-contact-charge-subject',
  templateUrl: './list-contact-charge-subject.component.html',
  styleUrls: ['./list-contact-charge-subject.component.scss']
})
export class ListContactChargeSubjectComponent implements OnInit {

  AgothChargeSubjectResults: IDxc_Model_Agoth_ChargeSubject[];
  AgothChargeSubjectCount: number;
  report_name: string;
  exitCode: any;
  constructor(private ReportAgothChargeSubject: AgothChargeSubjectMetadata) { }

  ngOnInit() {
    this.ReportAgothChargeSubject.getSearchDataContact();
    this.AgothChargeSubjectResults = this.ReportAgothChargeSubject.$resultsContact;
    this.AgothChargeSubjectCount = this.ReportAgothChargeSubject.$countContact;
    this.exitCode = this.AgothChargeSubjectResults;
    this.report_name = localStorage.getItem('report_name');
  }

}
