import { Component, Inject, OnInit } from '@angular/core';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IDxc_Model_Moi_Dopa_Marriage_Certificates, Dxc_Model_Moi_Dopa_Marriage_Certificates } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Marriage_Certificates';
import { DopaMoiMarriageCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-marriage-certificates/dxc-model-dopa-moi-marriage-certificates.interface';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-marriagecertificates',
  templateUrl: './list-normal-marriagecertificates.component.html',
  styleUrls: ['./list-normal-marriagecertificates.component.scss'],
  providers:[
    DopaMoiMarriageCertificatesMetadata
  ]
})
export class ListNormalMarriagecertificatesComponent implements OnInit {
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
  report_name: string
  moiDopaMarriageCertificatesCount: number;
  moiDopaMarriageCertificatesResults: IDxc_Model_Moi_Dopa_Marriage_Certificates[];
  constructor(private ReportMarriageCertificates: DopaMoiMarriageCertificatesMetadata, public dialog: MatDialog) { }
  ngOnInit() {
    this.ReportMarriageCertificates.getSearchData();
    this.moiDopaMarriageCertificatesResults = this.ReportMarriageCertificates.$results;
    this.moiDopaMarriageCertificatesCount = this.ReportMarriageCertificates.$count;
    this.report_name = localStorage.getItem('report_name')
    console.log(this.report_name)
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dopa'].sub[0]['marriagecertificates'].img;
    this.departmentTitle = environment.qm.sub[0]['dopa'].title;

    const moiDopaMarriageCertificates = new Dxc_Model_Moi_Dopa_Marriage_Certificates(Item);
    moiDopaMarriageCertificates.setData(Item);
    const dataSet = moiDopaMarriageCertificates.getData();
    sessionStorage.setItem('dopa-moi-dopa-marriage-certificates', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem('dopa-moi-dopa-marriage-certificates'));
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(sessionStorage.getItem('dopa-moi-dopa-marriage-certificates'));
    this.htmlReport = this.ReportMarriageCertificates.getHtml(this.selectItem, title);
    this.openDialog(this.selectItem);
  }
  pdfPreviewlocal() {
    this.reportName = '/ReportMarriageCertificates';
    localStorage.setItem('dopa-moi-dopa-marriage-certificates', JSON.stringify(this.selectItem));
  }

  //เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentMarriageCertificatesDialog, {
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
    this.htmlReport = report.getHtml(this.selectItem, this.title);
    this.viewhtmlReport = report.viewgetHtml(this.selectItem, this.title);
  }

}


@Component({
  selector: 'dialog-content-marriage-certificates-dialog',
  templateUrl: 'dialog-content-marriage-certificates-dialog.html',
})
export class DialogContentMarriageCertificatesDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentMarriageCertificatesDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#marriage-certificates-full-width-modal").modal("show");
    });

  }
}