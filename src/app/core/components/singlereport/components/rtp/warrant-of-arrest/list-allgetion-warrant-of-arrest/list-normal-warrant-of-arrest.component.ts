import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RtpWarrantOfArrestMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-warrant-of-arrest/dxc-model-rtp-warrant-of-arrest.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IDxc_Model_Rtp_Warrant_Of_Arrest, Dxc_Model_Rtp_Warrant_Of_Arrest } from 'src/app/core/shared/models/Dxc_Model_Rtp_Warrant_Of_Arrest';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;

@Component({
  selector: 'app-list-normal-warrant-of-arrest',
  templateUrl: './list-normal-warrant-of-arrest.component.html',
  styleUrls: ['./list-normal-warrant-of-arrest.component.scss']
})
export class ListNormalWarrantOfArrestComponent implements OnInit {

  @Input() inputAlgationsWarrantOfArrest: IDxc_Model_Rtp_Warrant_Of_Arrest;
  warrantOfArrestResults: IDxc_Model_Rtp_Warrant_Of_Arrest[];
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
  warrantOfArrestCount: number;

  constructor(private ReportRtpWarrantOfArrest: RtpWarrantOfArrestMetadata, public dialog: MatDialog) { }
  
  ngOnInit() {
    this.ReportRtpWarrantOfArrest.getSearchData();
    this.warrantOfArrestResults = this.ReportRtpWarrantOfArrest.$results;
    this.warrantOfArrestCount = this.ReportRtpWarrantOfArrest.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['rtp'].sub[0]['warrantofarrest'].img;
    this.departmentTitle = environment.qm.sub[0]['rtp'].title;

    const WarrantOfArrest = new Dxc_Model_Rtp_Warrant_Of_Arrest(Item);
    WarrantOfArrest.setData(Item);
    const dataSet = WarrantOfArrest.getData();
    sessionStorage.setItem('rtp-arrest-warrant-current', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem('rtp-arrest-warrant-current'));
    // แสดง ข้อมูลเบื้องต้น
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.name + ' ' + this.selectItem.lastname,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(sessionStorage.getItem('rtp-arrest-warrant-current'));
    this.htmlReport = this.ReportRtpWarrantOfArrest.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {

    this.reportName = '/ReportRtpWarrantOfArrest';
    localStorage.setItem('rtp-arrest-warrant-current', JSON.stringify(this.selectItem));
    console.log(this.selectItem);

  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentWarrantOfArrestDialog, {
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
  selector: 'dialog-content-warrant-of-arrest-dialog',
  templateUrl: 'dialog-content-warrant-of-arrest-dialog.html',
})
export class DialogContentWarrantOfArrestDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentWarrantOfArrestDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#warrant-of-arrest-full-width-modal").modal("show");
    });

  }
}