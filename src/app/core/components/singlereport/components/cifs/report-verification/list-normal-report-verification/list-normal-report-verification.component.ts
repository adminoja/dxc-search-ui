import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CifsReportVerificationMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-cifs-report-verification/dxc-model-cifs-report-verification.interface';
import { Dxc_Model_Cifs_ReportVerification, IDxc_Model_Cifs_ReportVerification } from 'src/app/core/shared/models/Dxc_Model_Cifs_ReportVerification';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-report-verification',
  templateUrl: './list-normal-report-verification.component.html',
  styleUrls: ['./list-normal-report-verification.component.scss']
})
export class ListNormalReportVerificationComponent implements OnInit {

  cifsReportVerificationResults: IDxc_Model_Cifs_ReportVerification[];
  cifsReportVerificationCount: number;
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
  constructor(private ReportCifsReportVerification: CifsReportVerificationMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportCifsReportVerification.getSearchData();
    this.cifsReportVerificationResults = this.ReportCifsReportVerification.$results;
    this.cifsReportVerificationCount = this.ReportCifsReportVerification.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['cifs'].sub[0]['reportverification'].img;
    this.departmentTitle = environment.qm.sub[0]['cifs'].title;

    const cifsReportVerification = new Dxc_Model_Cifs_ReportVerification(Item);
    cifsReportVerification.setData(Item);
    const dataSet = cifsReportVerification.getData();
    sessionStorage.setItem('cifs-report-verification', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem('cifs-report-verification'));
    // แสดง ข้อมูลเบื้องต้น
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstname + ' ' + this.selectItem.lastname,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;

    this.selectData = JSON.parse(sessionStorage.getItem('cifs-report-verification'));
    this.htmlReport = this.ReportCifsReportVerification.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportCifsReportVerification';
    localStorage.setItem('cifs-report-verification', JSON.stringify(this.selectItem));
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentVerificationDialog, {
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
      $("#cifsReportVerification").modal('toggle');
    });

  }

}


@Component({
  selector: 'dialog-content-verification-dialog',
  templateUrl: 'dialog-content-verification-dialog.html',
})
export class DialogContentVerificationDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentVerificationDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#verification-full-width-modal").modal("show");
    });

  }
}
