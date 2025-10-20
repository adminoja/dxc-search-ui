import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SsoEmployeeEmploymentMetaData } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-sso-employee-employment/dxc-model-sso-employee-employment.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { Dxc_Model_Sso_EmployeeEmployment, IDxc_Model_Sso_EmployeeEmployment } from 'src/app/core/shared/models/Dxc_Model_Sso_EmployeeEmployment';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-employee-employment',
  templateUrl: './list-normal-employee-employment.component.html',
  styleUrls: ['./list-normal-employee-employment.component.scss']
})
export class ListNormalEmployeeEmploymentComponent implements OnInit {
  ssoEmployeeEmploymentResults: IDxc_Model_Sso_EmployeeEmployment[];
  ssoEmployeeEmploymentShow: boolean;
  ssoEmployeeEmploymentCount: number;
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
  constructor(private ReportSsoEmployeeEmployment: SsoEmployeeEmploymentMetaData, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.ReportSsoEmployeeEmployment.getSearchData();
    this.ssoEmployeeEmploymentResults = this.ReportSsoEmployeeEmployment.$results;
    this.ssoEmployeeEmploymentShow = this.ReportSsoEmployeeEmployment.$show;
    this.ssoEmployeeEmploymentCount = this.ReportSsoEmployeeEmployment.$count;

    // this.ssoEmployeeEmploymentResults.sort(function (a, b) {
    //   return a.employeeBirthdateString.localeCompare(b.employeeBirthdateString);
    // });
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['sso'].sub[0]['employeeEmployment'].img;
    this.departmentTitle = environment.qm.sub[0]['sso'].title;

    const ssoEmployeeEmploymen = new Dxc_Model_Sso_EmployeeEmployment(Item);
    ssoEmployeeEmploymen.setData(Item);
    const dataSet = ssoEmployeeEmploymen.getData();
    const schema = environment.qm.sub[0]['sso'].sub[0]['employeeEmployment'].schema;
    localStorage.setItem('sso-employee-employment', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem(schema));
    // แสดง ข้อมูลเบื้องต้น
    this.person = {
      citizenCardNumber: this.selectItem.ssoNum,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.genderDesc,
      dateOfBirth: this.selectItem.empBirthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem(schema));
    this.htmlReport = this.ReportSsoEmployeeEmployment.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportSsoEmployeeEmployment';
    localStorage.setItem('sso-employee-employment', JSON.stringify(this.selectItem));
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentemployeeEmploymentDialog, {
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
  selector: 'dialog-content-employee-employment-dialog',
  templateUrl: 'dialog-content-employee-employment-dialog.html',
})
export class DialogContentemployeeEmploymentDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentemployeeEmploymentDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#employee-employment-full-width-modal").modal("show");
    });

  }
}

