import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RlpdCrimeDefendantCompensationMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-crime-defendant-compensation/dxc-model-rlpd-crime-defendant-compensation.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { Dxc_Model_Rlpd_CrimeDefendantCompensation, IDxc_Model_Rlpd_CrimeDefendantCompensation } from 'src/app/core/shared/models/Dxc_Model_Rlpd_CrimeDefendantCompensation';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-table-career-crime-defendant-compensation',
  templateUrl: './list-table-career-crime-defendant-compensation.component.html',
  styleUrls: ['./list-table-career-crime-defendant-compensation.component.scss']
})
export class ListTableCareerCrimeDefendantCompensationComponent implements OnInit {

  crimeDefendantCompensationResults: IDxc_Model_Rlpd_CrimeDefendantCompensation[];
  crimeDefendantCompensationCount: number;
  report_name: string;
  exitCode: any;
  constructor(private ReportRlpdCrimeDefendantCompensation: RlpdCrimeDefendantCompensationMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportRlpdCrimeDefendantCompensation.getSearchDataCareer();
    this.crimeDefendantCompensationResults = this.ReportRlpdCrimeDefendantCompensation.$resultsCareer;
    this.crimeDefendantCompensationCount = this.ReportRlpdCrimeDefendantCompensation.$countCareer;
    this.exitCode = this.crimeDefendantCompensationResults;
    this.report_name = localStorage.getItem('report_name');
  }
}
