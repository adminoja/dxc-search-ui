import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RtpMissingPersonCaseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-missing-person-case/dxc-model-rtp-missing-person-case.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { Dxc_Model_Rtp_MissingPersonCase, IDxc_Model_Rtp_MissingPersonCase } from 'src/app/core/shared/models/Dxc_Model_Rtp_MissingPersonCase';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-missing-person-case',
  templateUrl: './list-normal-missing-person-case.component.html',
  styleUrls: ['./list-normal-missing-person-case.component.scss'],
  providers: [RtpMissingPersonCaseMetadata]
})
export class ListNormalMissingPersonCaseComponent implements OnInit, OnChanges {
  @Input() inputNormalMissingPersonCase: IDxc_Model_Rtp_MissingPersonCase;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  missingPersonCaseResults: IDxc_Model_Rtp_MissingPersonCase[];
  missingPersonCaseCount: number;
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

  constructor(private ReportRtpMissingPersonCase: RtpMissingPersonCaseMetadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'rtp-missing-person-case';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputNormalMissingPersonCase));
    this.ReportRtpMissingPersonCase.getSearchData();
    this.missingPersonCaseResults = this.ReportRtpMissingPersonCase.$results;
    this.missingPersonCaseCount = this.ReportRtpMissingPersonCase.$count;
  }

  ngOnInit() {
    this.ReportRtpMissingPersonCase.getSearchData();
    this.missingPersonCaseResults = this.ReportRtpMissingPersonCase.$results;
    this.missingPersonCaseCount = this.ReportRtpMissingPersonCase.$count;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['rtp'].sub[0]['missingpersoncase'].img;
    this.departmentTitle = environment.qm.sub[0]['rtp'].title;

    const missingpersoncase = new Dxc_Model_Rtp_MissingPersonCase(Item);
    missingpersoncase.setData(Item);
    const dataSet = missingpersoncase.getData();
    sessionStorage.setItem('rtp-missing-person-case', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem('rtp-missing-person-case'));
    // แสดง ข้อมูลเบื้องต้น ประวัติบุคคลสูญหาย (ฐานข้อมูลเก่า ระบบ Police)
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(sessionStorage.getItem('rtp-missing-person-case'));
    this.htmlReport = this.ReportRtpMissingPersonCase.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    this.reportName = '/ReportRtpMissingPersonCase';
    sessionStorage.setItem('rtp-missing-person-case', JSON.stringify(this.selectItem));
  }
  onMissingPersonCaseSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }
  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentmissingPersonCaseDialog, {
      data: {
        title: this.title, // dbname
        img: this.img,
        departmentImg: this.departmentImg,
        departmentTitle: this.departmentTitle,
        reportName: this.reportName,
        selectData: this.selectData,
        viewhtmlReport: this.viewhtmlReport,
        person: this.person
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    const dataSearch = {
      title: this.title, // dbname
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
  selector: 'dialog-content-missing-person-case-dialog',
  templateUrl: 'dialog-content-missing-person-case-dialog.html',
})
export class DialogContentmissingPersonCaseDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentmissingPersonCaseDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#missing-person-case-full-width-modal").modal("show");
    });

  }
}
