import { Component, EventEmitter, Inject, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RlpdCrimeDefendantCompensationMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-crime-defendant-compensation/dxc-model-rlpd-crime-defendant-compensation.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { Dxc_Model_Rlpd_CrimeDefendantCompensation, IDxc_Model_Rlpd_CrimeDefendantCompensation } from 'src/app/core/shared/models/Dxc_Model_Rlpd_CrimeDefendantCompensation';
import { SpecializedopService } from 'src/app/core/shared/services/dxc/idb/dop/specializedop.service';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-career-crime-defendant-compensation',
  templateUrl: './list-career-crime-defendant-compensation.component.html',
  styleUrls: ['./list-career-crime-defendant-compensation.component.scss']
})
export class ListCareerCrimeDefendantCompensationComponent implements OnInit {
  @Input() inputNormalCrimeDefendantCompensation: IDxc_Model_Rlpd_CrimeDefendantCompensation;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  crimeDefendantCompensationResults: IDxc_Model_Rlpd_CrimeDefendantCompensation[];
  crimeDefendantCompensationCount: number;
  report_name: string;
  
  careerCount: number;
  results: any;
  obj: string;
  career: any;
  exitCode: any;
  constructor(private ReportRlpdCrimeDefendantCompensation: RlpdCrimeDefendantCompensationMetadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'rlpd-crime-defendant-compensation';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputNormalCrimeDefendantCompensation));
    this.ReportRlpdCrimeDefendantCompensation.getSearchData();
    this.crimeDefendantCompensationResults = this.ReportRlpdCrimeDefendantCompensation.$results;
    this.crimeDefendantCompensationCount = this.ReportRlpdCrimeDefendantCompensation.$count;
   
  }

  ngOnInit() {
    this.ReportRlpdCrimeDefendantCompensation.getSearchDataCareer();
    this.crimeDefendantCompensationResults = this.ReportRlpdCrimeDefendantCompensation.$resultsCareer;
    this.crimeDefendantCompensationCount = this.ReportRlpdCrimeDefendantCompensation.$countCareer;
    this.exitCode = this.crimeDefendantCompensationResults;
    this.report_name = localStorage.getItem('report_name');
  }
 

}
