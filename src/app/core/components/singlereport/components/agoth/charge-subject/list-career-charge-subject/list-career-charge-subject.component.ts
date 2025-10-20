import { Component, OnInit } from '@angular/core';
import { AgothChargeSubjectMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-agoth-charge-subjects/dxc-model-agoth-charge-subjects.interface';
import { IDxc_Model_Agoth_ChargeSubject } from 'src/app/core/shared/models/Dxc_Model_Agoth_ChargeSubject';

@Component({
  selector: 'app-list-career-charge-subject',
  templateUrl: './list-career-charge-subject.component.html',
  styleUrls: ['./list-career-charge-subject.component.scss']
})
export class ListCareerChargeSubjectComponent implements OnInit {
  AgothChargeSubjectResults: IDxc_Model_Agoth_ChargeSubject[];
  AgothChargeSubjectCount: number;
  report_name: string;
  exitCode: any;
  constructor(private ReportAgothChargeSubject: AgothChargeSubjectMetadata) { }

  ngOnInit() {
    this.ReportAgothChargeSubject.getSearchDataCareer();
    this.AgothChargeSubjectResults = this.ReportAgothChargeSubject.$resultsCareer;
    this.AgothChargeSubjectCount = this.ReportAgothChargeSubject.$countCareer;
    this.exitCode = this.AgothChargeSubjectResults;
    this.report_name = localStorage.getItem('report_name');
  }

}
