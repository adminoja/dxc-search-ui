import { Component, Inject, OnInit } from '@angular/core';
import { IDxc_Model_Dsd_Moi_Workforce_Developments, Dxc_Model_Dsd_Moi_Workforce_Developments } from 'src/app/core/shared/models/Dxc_Model_Dsd_Moi_Workforce_Developments';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { DsdMoiWorkforceDevelopmentsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dsd-moi-workforce-developments/dxc-model-dsd-moi-workforce-developments.interface';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-workforce-developments',
  templateUrl: './list-normal-workforce-developments.component.html',
  styleUrls: ['./list-normal-workforce-developments.component.scss'],
  providers: [
    DsdMoiWorkforceDevelopmentsMetadata
  ]
})
export class ListNormalWorkforceDevelopmentsComponent implements OnInit {
  moiDsdWorkforceDevelopmentsResults: IDxc_Model_Dsd_Moi_Workforce_Developments[];
  moiDsdWorkforceDevelopmentsCount: number;
  moiMoiDsdWorkforceDevelopmentsShow: boolean;
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
  constructor(private ReportMoiDsdWorkforceDevelopments: DsdMoiWorkforceDevelopmentsMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportMoiDsdWorkforceDevelopments.getSearchData();
    this.moiDsdWorkforceDevelopmentsResults = this.ReportMoiDsdWorkforceDevelopments.$results;
    this.moiMoiDsdWorkforceDevelopmentsShow = this.ReportMoiDsdWorkforceDevelopments.$show;
    this.moiDsdWorkforceDevelopmentsCount = this.ReportMoiDsdWorkforceDevelopments.$count;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dsd'].sub[0]['workforcedevelopments'].img;
    this.departmentTitle = environment.qm.sub[0]['dsd'].title;

    const moiDsdWorkforceDevelopments = new Dxc_Model_Dsd_Moi_Workforce_Developments(Item);
    moiDsdWorkforceDevelopments.setData(Item);
    const dataSet = moiDsdWorkforceDevelopments.getData();
    sessionStorage.setItem('dsd-moi-dsd-workforce-developments', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem('dsd-moi-dsd-workforce-developments'));
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.names,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(sessionStorage.getItem('dsd-moi-dsd-workforce-developments'));
    this.htmlReport = this.ReportMoiDsdWorkforceDevelopments.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    this.reportName = '/ReportMoiDsdWorkforceDevelopments';
    sessionStorage.setItem('dsd-moi-dsd-workforce-developments', JSON.stringify(this.selectItem));
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentWorkforceDevelopmentsDialog, {
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
  selector: 'dialog-content-workforce-developments-dialog',
  templateUrl: 'dialog-content-workforce-developments-dialog.html',
})
export class DialogContentWorkforceDevelopmentsDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentWorkforceDevelopmentsDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#workforce-developments-full-width-modal").modal("show");
    });

  }
}