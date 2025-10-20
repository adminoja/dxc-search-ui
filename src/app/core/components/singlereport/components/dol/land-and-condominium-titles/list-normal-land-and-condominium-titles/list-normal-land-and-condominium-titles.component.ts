import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DolLandAndCondominiumTitlesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dol-land-and-condominium-titles/dxc-model-dol-land-and-condominium-titles.interface';
import { Dxc_Model_Dol_Land_and_Condominium_Titles, IDxc_Model_Dol_Land_and_Condominium_Titles } from 'src/app/core/shared/models/Dxc_Model_Dol_Land_and_Condominium_Titles';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-land-and-condominium-titles',
  templateUrl: './list-normal-land-and-condominium-titles.component.html',
  styleUrls: ['./list-normal-land-and-condominium-titles.component.scss'],
  providers: [DolLandAndCondominiumTitlesMetadata]
})
export class ListNormalLandAndCondominiumTitlesComponent implements OnInit {
  landAndCondominiumTitlesResults: IDxc_Model_Dol_Land_and_Condominium_Titles[];
  landAndCondominiumTitlesCount: number;
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

  constructor(private ReportDolLandAndCondominiumTitles: DolLandAndCondominiumTitlesMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportDolLandAndCondominiumTitles.getSearchData();
    this.landAndCondominiumTitlesResults = this.ReportDolLandAndCondominiumTitles.$results;
    this.landAndCondominiumTitlesCount = this.ReportDolLandAndCondominiumTitles.$count;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.landAndCondominiumTitlesResults;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dol'].sub[0]['landandcondominiumtitles'].img;
    this.departmentTitle = environment.qm.sub[0]['dol'].title;

    const dollandandcondominium = new Dxc_Model_Dol_Land_and_Condominium_Titles(Item);
    dollandandcondominium.setData(Item);
    const dataSet = dollandandcondominium.getData();
    localStorage.setItem('dol-moi-dol-land-and-condominium-titles', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('dol-moi-dol-land-and-condominium-titles'));
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: '-',
      sex: '-',
      dateOfBirth: null
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem('dol-moi-dol-land-and-condominium-titles'));
    this.htmlReport = this.ReportDolLandAndCondominiumTitles.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    this.reportName = '/ReportDolLandAndCondominiumTitles';
    localStorage.setItem('dol-moi-dol-land-and-condominium-titles', JSON.stringify(this.selectItem));
    console.log(this.selectItem);
  }

   // เปิด Modal
   openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentLandAndCondominiumDialog, {
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
    };
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
  selector: 'dialog-content-land-and-condominium-dialog',
  templateUrl: 'dialog-content-land-and-condominium-dialog.html',
})
export class DialogContentLandAndCondominiumDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentLandAndCondominiumDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#land-and-condominium-full-width-modal").modal("show");
    });

  }
}
