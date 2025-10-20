import { IDxc_Model_Agoth_ChargeSubject, Dxc_Model_Agoth_ChargeSubject } from './../../../../../../shared/models/Dxc_Model_Agoth_ChargeSubject';
import { AgothChargeSubjectMetadata } from './../../../../../localsearch/qmreporttemplate/dxc-model-agoth-charge-subjects/dxc-model-agoth-charge-subjects.interface';
import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';

declare var $;
@Component({
  selector: 'app-list-allegation-charge-subject',
  templateUrl: './list-allegation-charge-subject.component.html',
  styleUrls: ['./list-allegation-charge-subject.component.scss'],
  providers: [
    AgothChargeSubjectMetadata
  ]
})
export class ListAllegationChargeSubjectComponent implements OnInit, OnChanges {
  @Input() inputAllegationChargeSubject: IDxc_Model_Agoth_ChargeSubject;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  AgothChargeSubjectResults: IDxc_Model_Agoth_ChargeSubject[];
  AgothChargeSubjectCount: number;

  title: string; // ชื่อหน่วยงานย่อย
  selectItem: any;
  person: Dxc_Model_Person;
  img: string; // รูปภาพหน่วยงานย่อย
  departmentImg: string; // รูปภาพหน่วยงานหลัก
  departmentTitle: string; // ชื่อหน่วยงานหลัก
  selectData: number = null;
  htmlReport: any;
  viewhtmlReport: any;
  reportName: string;

  constructor(private ReportAgothChargeSubject: AgothChargeSubjectMetadata, public dialog: MatDialog) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.inputAllegationChargeSubject !== undefined) {
      const schema = 'agoth-charge-subject';
      localStorage.setItem(schema + 'Results', JSON.stringify(this.inputAllegationChargeSubject))
      this.ReportAgothChargeSubject.getSearchData();
      this.AgothChargeSubjectResults = this.ReportAgothChargeSubject.$results;
      this.AgothChargeSubjectCount = this.ReportAgothChargeSubject.$count;
    } else {
      const schema = 'doc-prisoner';
      localStorage.setItem(schema + 'Results', JSON.stringify([]))
      this.ReportAgothChargeSubject.getSearchData();
      this.AgothChargeSubjectResults = this.ReportAgothChargeSubject.$results;
      this.AgothChargeSubjectCount = this.ReportAgothChargeSubject.$count;
    }
  }

  ngOnInit() {
    this.ReportAgothChargeSubject.getSearchData();
    this.AgothChargeSubjectResults = this.ReportAgothChargeSubject.$results;
    this.AgothChargeSubjectCount = this.ReportAgothChargeSubject.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['agoth'].sub[0]['chargeSubject'].img;
    this.departmentTitle = environment.qm.sub[0]['agoth'].title;

    const agothchargesubject = new Dxc_Model_Agoth_ChargeSubject(Item);
    agothchargesubject.setData(Item);
    const dataSet = agothchargesubject.getData();
    localStorage.setItem('agoth-charge-subject', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('agoth-charge-subject'));
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem('agoth-charge-subject'));
    this.htmlReport = this.ReportAgothChargeSubject.getHtml(this.selectItem, title);
    console.log(this.htmlReport)
    this.openDialog(this.selectData);

    // if (title === 'ข้อมูลผู้ต้องหา/จำเลย') {
    //   // filter DateOfBirth และ filter Sex
    //   console.log('1');
    //   const agothchargesubject = new Dxc_Model_Agoth_ChargeSubject(Item);
    //   agothchargesubject.setData(Item);
    //   const dataSet = agothchargesubject.getData();
    //   localStorage.setItem('agoth-charge-subject', JSON.stringify(dataSet));
    //   this.selectItem = JSON.parse(localStorage.getItem('agoth-charge-subject'));
    //   // แสดง ข้อมูลเบื้องต้น ข้อมูลผู้ต้องหา/จำเลย
    //   this.person = {
    //     citizenCardNumber: this.selectItem.citizenId,
    //     fullName: this.selectItem.name1 + ' ' + this.selectItem.surname1,
    //     sex: this.selectItem.genderName,
    //     dateOfBirth: this.selectItem.birthDate
    //   };
    //   this.departmentImg = departmentImg;
    // } else {

    // }
    // if (title === 'ข้อมูลผู้ต้องหา/จำเลย') {

    //   this.selectData = JSON.parse(localStorage.getItem('agoth-charge-subject'));
    //   this.htmlReport = this.ReportAgothChargeSubject.getHtml(this.selectItem, title);
    //   this.openDialog(this.selectItem);
    // } else {
    // }
  }

  pdfPreviewlocal() {
    if (this.title === 'ข้อมูลผู้ต้องหา/จำเลย') {
      console.log(this.title);
      this.reportName = '/ReportAgothChargeSubject';
      localStorage.setItem('agoth-charge-subject', JSON.stringify(this.selectItem));
    } else {

    }
  }

  onChargeSubjectSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

  //เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentChargeSubjectDialog, {
      data: {
        title: this.title, //dbname
        img: this.img,
        departmentImg: this.departmentImg,
        departmentTitle: this.departmentTitle,
        reportName: this.reportName,
        selectData: this.selectData,
        viewhtmlReport: this.viewhtmlReport,
        person: this.person,
        pdfPreview: () => this.pdfPreviewlocal() // ✅ ส่งฟังก์ชันนี้เข้าไป
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    const dataSearch = {
      title: this.title, //dbname
      img: this.img,
      departmentImg: this.departmentImg,
      departmentTitle: this.departmentTitle,
    }
    localStorage.setItem('searchData', JSON.stringify(dataSearch));
  }
  selectRowModal(selectData: any) {
    let source = Object.keys(environment.qm.sub[0]);
    for (const entry of source) {
      let sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      for (const entry_sub of sub) {
        let title_sub = environment.qm.sub[0][entry].sub[0][entry_sub].title;
        const model = environment.qm.sub[0][entry].sub[0][entry_sub].model;
        const schema = environment.qm.sub[0][entry].sub[0][entry_sub].schema;
        const report = environment.qm.sub[0][entry].sub[0][entry_sub].report;

        if (this.title === title_sub) {
          this.reportName = `/${report}`;
          const dynamicClass = new DynamicClass().dynamicClass(model, selectData);
          const dataSet = dynamicClass.$dataSet;
          if (schema !== undefined) {
            localStorage.setItem(schema, JSON.stringify(dataSet));
            this.selectData = JSON.parse(localStorage.getItem(schema));
            // แสดง ซ้ายมือ
            this.person = {
              citizenCardNumber: selectData.person.citizenCardNumber,
              fullName: selectData.person.fullName,
              sex: selectData.person.sex,
              dateOfBirth: selectData.person.dateOfBirth
            };
            this.onGetHtml(this[report]);
          }
        }
      }
    }
  }
  onGetHtml(report: IManageService) {
    this.htmlReport = report.getHtml(this.selectData, this.title);
    this.viewhtmlReport = report.viewgetHtml(this.selectData, this.title);
  }

}

@Component({
  selector: 'dialog-content-charge-subject-dialog',
  templateUrl: 'dialog-content-charge-subject-dialog.html',
})
export class DialogContentChargeSubjectDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentChargeSubjectDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#charge-subject-full-width-modal").modal("show");
    });

  }
}

