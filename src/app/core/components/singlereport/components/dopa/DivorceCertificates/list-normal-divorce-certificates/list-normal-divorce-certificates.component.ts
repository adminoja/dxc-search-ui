import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DopaMoiDivorceCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-divorce-certificates/dxc-model-dopa-moi-divorce-certificates.interface';
import { Dxc_Model_Dopa_Moi_Divorce_Certificates } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Divorce_Certificates';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-divorce-certificates',
  templateUrl: './list-normal-divorce-certificates.component.html',
  styleUrls: ['./list-normal-divorce-certificates.component.scss']
})
export class ListNormalDivorceCertificatesComponent implements OnInit {
  moidopaDivorceCertificatesResults: Dxc_Model_Dopa_Moi_Divorce_Certificates[];
  moidopaDivorceCertificatesShow: boolean;
  moidopaDivorceCertificatesCount: number;
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

  constructor(private ReportDopaMoiDivorceCertificates: DopaMoiDivorceCertificatesMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportDopaMoiDivorceCertificates.getSearchData();
    this.moidopaDivorceCertificatesResults = this.ReportDopaMoiDivorceCertificates.$results;
    this.moidopaDivorceCertificatesShow = this.ReportDopaMoiDivorceCertificates.$show;
    this.moidopaDivorceCertificatesCount = this.ReportDopaMoiDivorceCertificates.$count;
    this.report_name = localStorage.getItem('report_name');

  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dopa'].sub[0]['divorcecertificates'].img;
    this.departmentTitle = environment.qm.sub[0]['dopa'].title;

    const moidopaDivorceCertificates = new Dxc_Model_Dopa_Moi_Divorce_Certificates(Item);
    moidopaDivorceCertificates.setData(Item);
    const dataSet = moidopaDivorceCertificates.getData();
    const schema = environment.qm.sub[0]['dopa'].sub[0]['divorcecertificates'].schema;
    sessionStorage.setItem('dopa-moi-dopa-divorce-certificates', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem('dopa-moi-dopa-divorce-certificates'));
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(sessionStorage.getItem('dopa-moi-dopa-divorce-certificates'));
    this.htmlReport = this.ReportDopaMoiDivorceCertificates.getHtml(this.selectItem, title);
    this.openDialog(this.selectItem);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportDopaMoiDivorceCertificates';
    sessionStorage.setItem('dopa-moi-dopa-divorce-certificates', JSON.stringify(this.selectItem));
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentDivorceCertificatesDialog, {
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
    this.htmlReport = report.getHtml(this.selectItem, this.title);
    this.viewhtmlReport = report.viewgetHtml(this.selectItem, this.title);
  }

}


@Component({
  selector: 'dialog-content-divorce-certificates-dialog',
  templateUrl: 'dialog-content-divorce-certificates-dialog.html',
})
export class DialogContentDivorceCertificatesDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentDivorceCertificatesDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#divorce-certificates-full-width-modal").modal("show");
    });

  }
}
