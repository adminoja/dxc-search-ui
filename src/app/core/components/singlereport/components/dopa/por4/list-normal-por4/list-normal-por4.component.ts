import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DopaMoiPor4Metadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-por4/dxc-model-dopa-moi-por4.interface';
import { IDxc_Model_Dopa_MoiDopaPor4Licenses, Dxc_Model_Dopa_MoiDopaPor4Licenses } from 'src/app/core/shared/models/Dxc_Model_Dopa_MoiDopaPor4Licenses';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-por4',
  templateUrl: './list-normal-por4.component.html',
  styleUrls: ['./list-normal-por4.component.scss'],
  providers: [
    DopaMoiPor4Metadata
  ]
})
export class ListNormalPor4Component implements OnInit {
  moidopapor4Results: IDxc_Model_Dopa_MoiDopaPor4Licenses[];
  moidopapor4Count: number;
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

  constructor(private ReportDopaMoiPor4: DopaMoiPor4Metadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportDopaMoiPor4.getSearchData();
    this.moidopapor4Results = this.ReportDopaMoiPor4.$results;
    this.moidopapor4Count = this.ReportDopaMoiPor4.$count;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.moidopapor4Results;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dopa'].sub[0]['por4'].img;
    this.departmentTitle = environment.qm.sub[0]['dopa'].title;

    const dopamoidopapor4 = new Dxc_Model_Dopa_MoiDopaPor4Licenses(Item);
    dopamoidopapor4.setData(Item);
    const dataSet = dopamoidopapor4.getData();
    const schema = environment.qm.sub[0]['dopa'].sub[0]['por4'].schema;
    sessionStorage.setItem('dopa-moi-dopa-por4-licenses', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem(schema));
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(sessionStorage.getItem(schema));
    this.htmlReport = this.ReportDopaMoiPor4.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    console.log(this.title);
    this.reportName = '/ReportDopaMoiPor4';
    localStorage.setItem('dopa-moi-dopa-por4-licenses', JSON.stringify(this.selectItem));
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentPor4Dialog, {
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
  selector: 'dialog-content-por4-dialog',
  templateUrl: 'dialog-content-por4-dialog.html',
})
export class DialogContentPor4Dialog {
  constructor(public dialogRef: MatDialogRef<DialogContentPor4Dialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#por4-full-width-modal").modal("show");
    });

  }
}
