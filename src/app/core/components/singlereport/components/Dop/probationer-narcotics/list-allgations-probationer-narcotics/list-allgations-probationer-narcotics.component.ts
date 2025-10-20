import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DopProbationerNarcoticsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dop-probationer-narcotics/dxc-model-dop-probationer-narcotics.interface';
import { Dxc_Model_Dop_Probationer_Narcotics, IDxc_Model_Dop_Probationer_Narcotics } from 'src/app/core/shared/models/Dxc_Model_Dop_Probationer_Narcotics';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-allgations-probationer-narcotics',
  templateUrl: './list-allgations-probationer-narcotics.component.html',
  styleUrls: ['./list-allgations-probationer-narcotics.component.scss']
})
export class ListAllgationsProbationerNarcoticsComponent implements OnInit {
  probationerNarcoticsResults: IDxc_Model_Dop_Probationer_Narcotics[];
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
  probationerNarcoticsCount: number;
  report_name: string;
  constructor(private ReportDopProbationerNarcotics: DopProbationerNarcoticsMetadata, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ReportDopProbationerNarcotics.getSearchData();
    this.probationerNarcoticsResults = this.ReportDopProbationerNarcotics.$results;
    this.probationerNarcoticsCount = this.ReportDopProbationerNarcotics.$count;
    this.report_name = localStorage.getItem('report_name');
    // this.exitCode = this.probationerNarcoticsResults
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dop'].sub[0]['probationernarcotics'].img;
    this.departmentTitle = environment.qm.sub[0]['dop'].title;

    const dopprobationer = new Dxc_Model_Dop_Probationer_Narcotics(Item);
    dopprobationer.setData(Item);
    const dataSet = dopprobationer.getData();
    localStorage.setItem('dop-probationer-narcotics', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('dop-probationer-narcotics'));
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;

    this.selectData = JSON.parse(localStorage.getItem('dop-probationer-narcotics'));
    this.htmlReport = this.ReportDopProbationerNarcotics.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {

    this.reportName = '/ReportDopProbationerNarcotics';
    localStorage.setItem('dop-probationer-narcotics', JSON.stringify(this.selectItem));
    console.log(this.selectItem);

  }

   // เปิด Modal
   openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentAllgationsProbationerNarcoticsDialog, {
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
  selector: 'allgations-probationer-narcotics-dialog',
  templateUrl: 'allgations-probationer-narcotics-dialog.html',
})
export class DialogContentAllgationsProbationerNarcoticsDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentAllgationsProbationerNarcoticsDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#probationer-narcotics-full-width-modal").modal("show");
    });

  }
}
