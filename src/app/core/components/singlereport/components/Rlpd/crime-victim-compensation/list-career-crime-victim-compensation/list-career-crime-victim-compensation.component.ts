import { Component, OnInit } from '@angular/core';
import { RlpdCrimeVictimCompensationMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-crime-victim-compensation/dxc-model-rlpd-crime-victim-compensation.interface';
import { IDxc_Model_Rlpd_CrimeVictimCompensation } from 'src/app/core/shared/models/Dxc_Model_Rlpd_CrimeVictimCompensation';

@Component({
  selector: 'app-list-career-crime-victim-compensation',
  templateUrl: './list-career-crime-victim-compensation.component.html',
  styleUrls: ['./list-career-crime-victim-compensation.component.scss']
})
export class ListCareerCrimeVictimCompensationComponent implements OnInit {
  crimeVictimCompensationResults: IDxc_Model_Rlpd_CrimeVictimCompensation[];
  crimeVictimCompensationCount: number;
  report_name: string;
  exitCode: any;
  constructor(private ReportRlpdCrimeVictimCompensation: RlpdCrimeVictimCompensationMetadata) { }

  ngOnInit() {
    this.ReportRlpdCrimeVictimCompensation.getSearchDataCareer();
    this.crimeVictimCompensationResults = this.ReportRlpdCrimeVictimCompensation.$resultsCareer;
    this.crimeVictimCompensationCount = this.ReportRlpdCrimeVictimCompensation.$countCareer;
    this.exitCode = this.crimeVictimCompensationResults;
    this.report_name = localStorage.getItem('report_name');
  }

}
