import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Dxc_Model_Rlpd_Requestors } from 'src/app/core/shared/models/Dxc_Model_Rlpd_Requestors';
import { RlpdRequestorsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';

declare var $;
@Component({
  selector: 'app-list-normal-requestors',
  templateUrl: './list-normal-requestors.component.html',
  styleUrls: ['./list-normal-requestors.component.scss']
})
export class ListNormalRequestorsComponent implements OnInit, OnChanges {
  @Input() inputNormalRequestors: Dxc_Model_Rlpd_Requestors;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
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
  requestorsResults: Dxc_Model_Rlpd_Requestors[];
  requestorsCount: number;
  constructor(private ReportRlpdRequestors: RlpdRequestorsMetadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'rlpd-requestors';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputNormalRequestors))
    this.ReportRlpdRequestors.getSearchData();
    this.requestorsResults = this.ReportRlpdRequestors.$results;
    this.requestorsCount = this.ReportRlpdRequestors.$count;
  }

  ngOnInit() {
    this.ReportRlpdRequestors.getSearchData();
    this.requestorsResults = this.ReportRlpdRequestors.$results;
    this.requestorsCount = this.ReportRlpdRequestors.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['rlpd'].sub[0]['requestors'].img;
    this.departmentTitle = environment.qm.sub[0]['rlpd'].title;

    const RlpdRequestors = new Dxc_Model_Rlpd_Requestors(Item);
    RlpdRequestors.setData(Item);
    const dataSet = RlpdRequestors.getData();
    localStorage.setItem('rlpd-requestors', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('rlpd-requestors'));
    console.log(this.selectItem)
    this.person = {
      citizenCardNumber: this.selectItem.personNationalIdentificationId,
      fullName: this.selectItem.personGivenName + ' ' + this.selectItem.personSurName,
      sex: this.selectItem.personSex,
      dateOfBirth: this.selectItem.personBirthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem('rlpd-requestors'));
    this.htmlReport = this.ReportRlpdRequestors.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);

    // this.title = title;
    // if (title === 'ผู้ร้องทุกข์') {
    //   console.log('pass');
    //   const RlpdRequestors = new Dxc_Model_Rlpd_Requestors(Item);
    //   RlpdRequestors.setData(Item);
    //   const dataSet = RlpdRequestors.getData();
    //   localStorage.setItem('rlpd-requestors', JSON.stringify(dataSet));
    //   this.selectItem = JSON.parse(localStorage.getItem('rlpd-requestors'));
    //   this.person = {
    //     citizenCardNumber: this.selectItem.personNationalIdentificationId,
    //     fullName: this.selectItem.personGivenName + ' ' + this.selectItem.personSurName,
    //     sex: this.selectItem.personSex,
    //     dateOfBirth: this.selectItem.personBirthDate
    //   };
    //   this.departmentImg = departmentImg;
    //   console.log(this.selectItem);
    // } else {
    // }
    // if (title === 'ผู้ร้องทุกข์') {
    //   this.selectData = JSON.parse(localStorage.getItem('rlpd-requestors'));
    //   this.htmlReport = this.ReportRlpdRequestors.getHtml(this.selectItem, title);
    //   this.viewhtmlReport = this.ReportRlpdRequestors.viewgetHtmlSingleReport(this.selectItem, title);
    //   this.openDialog(this.selectData);
    // } else {
    // }
  }

  pdfPreviewlocal() {
    if (this.title === 'ผู้ร้องทุกข์') {
      this.reportName = '/ReportRlpdRequestors';
      localStorage.setItem('rlpd-requestors', JSON.stringify(this.selectItem));
    } else {

    }
  }

  close() {
    $(document).ready(function () {
      $("#Rlpdrequestors").modal('toggle');
    });
  }

  onRlpdrequestorsSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

   // เปิด Modal
   openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentRequestorsDialog, {
      data: {
        title: this.title, // dbname
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
  selector: 'dialog-content-requestors-dialog',
  templateUrl: 'dialog-content-requestors-dialog.html',
})
export class DialogContentRequestorsDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentRequestorsDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#requestors-full-width-modal").modal("show");
    });

  }
}