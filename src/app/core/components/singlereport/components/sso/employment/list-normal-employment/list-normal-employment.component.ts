import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SsoEmploymentMetaData } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-sso-employment/dxc-model-sso-employment.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { Dxc_Model_Sso_Employment, IDxc_Model_Sso_Employment } from 'src/app/core/shared/models/Dxc_Model_Sso_Employment';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-employment',
  templateUrl: './list-normal-employment.component.html',
  styleUrls: ['./list-normal-employment.component.scss']
})
export class ListNormalEmploymentComponent implements OnInit {
  ssoEmploymentResults: IDxc_Model_Sso_Employment[];
  ssoEmploymentShow: boolean;
  ssoEmploymentCount: number;
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
  constructor(private ReportSsoEmployment: SsoEmploymentMetaData, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportSsoEmployment.getSearchData();
    this.ssoEmploymentResults = this.ReportSsoEmployment.$results;
    this.ssoEmploymentShow = this.ReportSsoEmployment.$show;
    this.ssoEmploymentCount = this.ReportSsoEmployment.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['sso'].sub[0]['employment'].img;
    this.departmentTitle = environment.qm.sub[0]['sso'].title;

    const ssoEmploymen = new Dxc_Model_Sso_Employment(Item);
    ssoEmploymen.setData(Item);
    const dataSet = ssoEmploymen.getData();
    console.log(dataSet);
    const schema = environment.qm.sub[0]['sso'].sub[0]['employment'].schema;
    localStorage.setItem('sso-employment', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem(schema));
    // แสดง ข้อมูลเบื้องต้น
    this.person = {
      citizenCardNumber: this.selectItem.ssoNum,
      fullName: '-',
      sex: '-',
      dateOfBirth: '-'
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem(schema));
    this.htmlReport = this.ReportSsoEmployment.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportSsoEmployment';
    localStorage.setItem('sso-employment', JSON.stringify(this.selectItem));
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentEmploymentDialog, {
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
  selector: 'dialog-content-employee-employment-detail-dialog',
  templateUrl: 'dialog-content-employee-employment-detail-dialog.html',
})
export class DialogContentEmploymentDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentEmploymentDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#employee-employment-detail-full-width-modal").modal("show");
    });

  }
}
