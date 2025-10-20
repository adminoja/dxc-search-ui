import { Dxc_Model_Moi_Dopa_Border_Passes, IDxc_Model_Moi_Dopa_Border_Passes } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Border_Passes';
import { Component, Inject, OnInit } from '@angular/core';
import { DopaMoiBorderPassesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-border-passes/dxc-model-dopa-moi-border-passes.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-borderpasses',
  templateUrl: './list-normal-borderpasses.component.html',
  styleUrls: ['./list-normal-borderpasses.component.scss'],
  providers: [
    DopaMoiBorderPassesMetadata
  ]
})
export class ListNormalBorderpassesComponent implements OnInit {
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
  moiDopaBorderPassesCount: number;

  moiDopaBorderPassesResults: IDxc_Model_Moi_Dopa_Border_Passes[];
  report_name: string;
  exitCode: any;
  constructor(private ReportborderPasses: DopaMoiBorderPassesMetadata, public dialog: MatDialog) { }
  ngOnInit() {
    this.ReportborderPasses.getSearchData();
    this.moiDopaBorderPassesResults = this.ReportborderPasses.$results;
    this.moiDopaBorderPassesCount = this.ReportborderPasses.$count;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.moiDopaBorderPassesResults;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dopa'].sub[0]['borderpasses'].img;
    this.departmentTitle = environment.qm.sub[0]['dopa'].title;

    const moiDopaBorderPasses = new Dxc_Model_Moi_Dopa_Border_Passes(Item);
    moiDopaBorderPasses.setData(Item);
    const dataSet = moiDopaBorderPasses.getData();
    sessionStorage.setItem('dopa-moi-dopa-border-passes', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem('dopa-moi-dopa-border-passes'));
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(sessionStorage.getItem('dopa-moi-dopa-border-passes'));
    this.htmlReport = this.ReportborderPasses.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    this.title = 'ผู้ขอออกหนังสือผ่านแดนทั้งหมด (Linkage)';
    this.reportName = '/ReportborderPasses';
    localStorage.setItem('dopa-moi-dopa-border-passes', JSON.stringify(this.selectItem));
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentBorderPassesDialog, {
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
      $("#DoppaMoiDopaBorderPasses").modal('toggle');
    });
  }
}


@Component({
  selector: 'dialog-content-border-passes-dialog',
  templateUrl: 'dialog-content-border-passes-dialog.html',
})
export class DialogContentBorderPassesDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentBorderPassesDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#border-passes-full-width-modal").modal("show");
    });

  }
}
