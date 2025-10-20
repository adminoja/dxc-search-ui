import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DltDriverLicenseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dlt-driver-license/dxc-model-dlt-driver-license.interface';
import { Dxc_Model_Dlt_DriverLicenseNew, IDxc_Model_Dlt_DriverLicenseNew } from 'src/app/core/shared/models/Dxc_Model_Dlt_DriverLicenseNew';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-driver-license',
  templateUrl: './list-normal-driver-license.component.html',
  styleUrls: ['./list-normal-driver-license.component.scss']
})
export class ListNormalDriverLicenseComponent implements OnInit {
  driverLicenseResults: IDxc_Model_Dlt_DriverLicenseNew[];
  driverLicenseShow: boolean;
  driverLicenseCount: number;
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
  constructor(private ReportDltDriverLicense: DltDriverLicenseMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportDltDriverLicense.getSearchData();
    this.driverLicenseResults = this.ReportDltDriverLicense.$results;
    this.driverLicenseShow = this.ReportDltDriverLicense.$show;
    this.driverLicenseCount = this.ReportDltDriverLicense.$count;

    // this.driverLicenseResults.sort(function (a, b) {
    //   return a.dataSubmitDate.localeCompare(b.dataSubmitDate);
    // });
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dlt'].sub[0]['driverLicense'].img;
    this.departmentTitle = environment.qm.sub[0]['dlt'].title;

    const driverLicense = new Dxc_Model_Dlt_DriverLicenseNew(Item);
    driverLicense.setData(Item);
    const dataSet = driverLicense.getData();
    console.log(dataSet);
    const schema = environment.qm.sub[0]['dlt'].sub[0]['driverLicense'].schema;
    localStorage.setItem('dlt-driver-license-new', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem(schema));
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.fullName,
      sex: this.selectItem.genderName,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem(schema));
    this.htmlReport = this.ReportDltDriverLicense.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportDltDriverLicense';
    localStorage.setItem('dlt-driver-license-new', JSON.stringify(this.selectItem));
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentDriverLicenseDialog, {
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

  close() {
    $(document).ready(function () {
      $("#DltdriverLicense").modal('toggle');
    });
  }

}

@Component({
  selector: 'dialog-content-driverLicense-dialog',
  templateUrl: 'dialog-content-driverLicense-dialog.html',
})
export class DialogContentDriverLicenseDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentDriverLicenseDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#driverLicense-full-width-modal").modal("show");
    });

  }
}
