import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DltCarLicenseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dlt-car-license/dxc-model-dlt-car-license.interface';
import { Dxc_Model_Dlt_CarLicenseNew, IDxc_Model_Dlt_CarLicenseNew } from 'src/app/core/shared/models/Dxc_Model_Dlt_CarLicenseNew';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-table-car-license',
  templateUrl: './list-table-car-license.component.html',
  styleUrls: ['./list-table-car-license.component.scss'],
  // providers: [DltCarLicenseMetadata]
})
export class ListTableCarLicenseComponent implements OnInit {

  carLicenseResults: IDxc_Model_Dlt_CarLicenseNew[];
  carLicenseShow: boolean;
  carLicenseCount: number;
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
  report_name: string;
  exitCode: any;

  constructor(private ReportDltcarLicense: DltCarLicenseMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportDltcarLicense.getSearchData();
    this.carLicenseResults = this.ReportDltcarLicense.$results;
    this.carLicenseShow = this.ReportDltcarLicense.$show;
    this.carLicenseCount = this.ReportDltcarLicense.$count;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.carLicenseResults

    // this.carLicenseResults.sort(function (a, b) {
    //   return a.regDate.localeCompare(b.regDate);
    // });
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dlt'].sub[0]['carLicense'].img;
    this.departmentTitle = environment.qm.sub[0]['dlt'].title;

    const driverLicense = new Dxc_Model_Dlt_CarLicenseNew(Item);
    driverLicense.setData(Item);
    const dataSet = driverLicense.getData();
    const schema = environment.qm.sub[0]['dlt'].sub[0]['carLicense'].schema;
    localStorage.setItem('dlt-car-license-new', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem(schema));
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.docNo1,
      fullName: '-',
      sex: '-',
      dateOfBirth: '-'
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem(schema));
    this.htmlReport = this.ReportDltcarLicense.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportDltcarLicense';
    localStorage.setItem('dlt-car-license-new', JSON.stringify(this.selectItem));
  }

    //เปิด Modal
    openDialog(arrData) {
      // $("#full-width-modal").modal();
      this.selectRowModal(arrData);
      const dialogRef = this.dialog.open(DialogContentCarLicenseTableDialog, {
        data: {
          title: this.title, //dbname
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
      console.log(this.htmlReport)
      this.viewhtmlReport = report.viewgetHtml(this.selectData, this.title);
    }

}

@Component({
  selector: 'dialog-content-car-license-table-dialog',
  templateUrl: 'dialog-content-car-license-table-dialog.html',
})
export class DialogContentCarLicenseTableDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentCarLicenseTableDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("car-license-table-full-width-modal").modal("show");
    });

  }
}
