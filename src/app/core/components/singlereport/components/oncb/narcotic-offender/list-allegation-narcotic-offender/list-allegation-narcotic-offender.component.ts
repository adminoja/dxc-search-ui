
import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { OncbNarcoticOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';

import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IDxc_Model_Oncb_NarcoticOffender, Dxc_Model_Oncb_NarcoticOffender } from 'src/app/core/shared/models/Dxc_Model_Oncb_NarcoticOffender';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-allegation-narcotic-offender',
  templateUrl: './list-allegation-narcotic-offender.component.html',
  styleUrls: ['./list-allegation-narcotic-offender.component.scss'],
  providers: [OncbNarcoticOffenderMetadata]
})
export class ListAllegationNarcoticOffenderComponent implements OnInit, OnChanges {
  @Input() inputAlgationsNarcoticOffender: IDxc_Model_Oncb_NarcoticOffender;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  narcoticOffenderResults: IDxc_Model_Oncb_NarcoticOffender[];
  narcoticOffenderCount: number;
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

  sortData: any;

  constructor(private ReportOncbNarcoticOffender: OncbNarcoticOffenderMetadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.inputAlgationsNarcoticOffender !== undefined) {
      const schema = 'oncb-narcotic-offender';
      localStorage.setItem(schema + 'Results', JSON.stringify(this.inputAlgationsNarcoticOffender))
      this.ReportOncbNarcoticOffender.getSearchData();
      this.narcoticOffenderResults = this.ReportOncbNarcoticOffender.$results;
      this.narcoticOffenderCount = this.ReportOncbNarcoticOffender.$count;
    } else {
      const schema = 'oncb-narcotic-offender';
      localStorage.setItem(schema + 'Results', JSON.stringify([]))
      this.ReportOncbNarcoticOffender.getSearchData();
      this.narcoticOffenderResults = this.ReportOncbNarcoticOffender.$results;
      this.narcoticOffenderCount = this.ReportOncbNarcoticOffender.$count;
    }
  }

  ngOnInit() {
    this.ReportOncbNarcoticOffender.getSearchData();
    this.narcoticOffenderResults = this.ReportOncbNarcoticOffender.$results;
    this.narcoticOffenderCount = this.ReportOncbNarcoticOffender.$count;

    // this.narcoticOffenderResults.sort(function (a, b) {
    //   return a.arrestDate.localeCompare(b.arrestDate);
    // });
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['oncb'].sub[0]['narcoticOffender'].img;
    this.departmentTitle = environment.qm.sub[0]['oncb'].title;

    if (title === 'ประวัติคดียาเสพติด') {
      // filter DateOfBirth และ filter Sex
      console.log('pass');
      const oncbnarcoticoffenders = new Dxc_Model_Oncb_NarcoticOffender(Item);
      oncbnarcoticoffenders.setData(Item);
      const dataSet = oncbnarcoticoffenders.getData();
      localStorage.setItem('oncb-narcotic-offender', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('oncb-narcotic-offender'));
      // แสดง ข้อมูลเบื้องต้น ประวัติคดียาเสพติด
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: this.selectItem.sex,
        dateOfBirth: this.selectItem.dateOfBirth
      };
      this.departmentImg = departmentImg;
      console.log(this.selectItem);
    } else {

    }
    if (title === 'ประวัติคดียาเสพติด') {
      this.departmentImg = departmentImg;
      this.selectData = JSON.parse(localStorage.getItem('oncb-narcotic-offender'));
      this.htmlReport = this.ReportOncbNarcoticOffender.getHtml(this.selectItem, title);
      this.openDialog(this.selectData);
    } else {
    }
  }

  pdfPreviewlocal() {
    if (this.title === 'ประวัติคดียาเสพติด') {
      this.reportName = '/ReportOncbNarcoticOffender';
      localStorage.setItem('oncb-narcotic-offender', JSON.stringify(this.selectItem));
    } else {

    }
  }

  formatDate(birthDate: string): string {
    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear() + 543;
    if (birthDate === 'null') {
      return '-';
    } else if (birthDate == null) {
      return '-';
    } else {
      const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
      return `${day} ${thmonth[month]} ${year}`;
    }
  }

  onNarcoticOffenderSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentNarcoticOffenderDialog, {
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
  selector: 'dialog-content-narcotic-offender-dialog',
  templateUrl: 'dialog-content-narcotic-offender-dialog.html',
})
export class DialogContentNarcoticOffenderDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentNarcoticOffenderDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#narcotic-offender-full-width-modal").modal("show");
    });

  }
}

