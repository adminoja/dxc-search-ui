import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RlpdCrimeVictimCompensationMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-crime-victim-compensation/dxc-model-rlpd-crime-victim-compensation.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { Dxc_Model_Rlpd_CrimeVictimCompensation, IDxc_Model_Rlpd_CrimeVictimCompensation } from 'src/app/core/shared/models/Dxc_Model_Rlpd_CrimeVictimCompensation';

declare var $;
@Component({
  selector: 'app-list-normal-crime-victim-compensation',
  templateUrl: './list-normal-crime-victim-compensation.component.html',
  styleUrls: ['./list-normal-crime-victim-compensation.component.scss'],
  providers: [RlpdCrimeVictimCompensationMetadata]
})
export class ListNormalCrimeVictimCompensationComponent implements OnInit, OnChanges {
  @Input() inputNormalCrimeVictimCompensation: IDxc_Model_Rlpd_CrimeVictimCompensation;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  crimeVictimCompensationResults: IDxc_Model_Rlpd_CrimeVictimCompensation[];
  crimeVictimCompensationCount: number;
  title: string; // ชื่อหน่วยงานย่อย
  selectItem: any;
  person: Dxc_Model_Person;
  departmentImg: string; // รูปภาพหน่วยงานหลัก
  selectData: number = null;
  htmlReport: any;
  viewhtmlReport: any;
  reportName: string;

  constructor(private ReportRlpdCrimeVictimCompensation: RlpdCrimeVictimCompensationMetadata) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'rlpd-crime-victim-compensation';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputNormalCrimeVictimCompensation))
    this.ReportRlpdCrimeVictimCompensation.getSearchData();
    this.crimeVictimCompensationResults = this.ReportRlpdCrimeVictimCompensation.$results;
    this.crimeVictimCompensationCount = this.ReportRlpdCrimeVictimCompensation.$count;
  }

  ngOnInit() {
    this.ReportRlpdCrimeVictimCompensation.getSearchData();
    this.crimeVictimCompensationResults = this.ReportRlpdCrimeVictimCompensation.$results;
    this.crimeVictimCompensationCount = this.ReportRlpdCrimeVictimCompensation.$count;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;

    const crimeVictimCompensation = new Dxc_Model_Rlpd_CrimeVictimCompensation(Item);
    crimeVictimCompensation.setData(Item);
    const dataSet = crimeVictimCompensation.getData();
    localStorage.setItem('rlpd-crime-victim-compensation', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('rlpd-crime-victim-compensation'));
    // แสดง ข้อมูลเบื้องต้น
    this.person = {
      citizenCardNumber: this.selectItem.victimCitizenId,
      fullName: this.selectItem.victimAttorneyGivenName + ' ' + this.selectItem.victimAttorneySurName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.victimAttorneyBirthDay
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem('rlpd-crime-victim-compensation'));
    this.htmlReport = this.ReportRlpdCrimeVictimCompensation.getHtml(this.selectItem, title);
    this.viewhtmlReport = this.ReportRlpdCrimeVictimCompensation.viewgetHtmlSingleReport(this.selectItem, title);
  }
  pdfPreviewlocal() {
    this.reportName = '/ReportRlpdCrimeVictimCompensation';
    localStorage.setItem('rlpd-crime-victim-compensation', JSON.stringify(this.selectItem));
  }

  close() {
    $(document).ready(function () {
      $("#RlpdcrimeVictimCompensation").modal('toggle');
    });
  }

  onCrimeVictimCompensationSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }
}
