import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { JfoJfoCase64Metadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-jfo-jfo-case64/dxc-model-jfo-jfo-case64.interface';
import { Dxc_Model_Jfo_Jfo_Case64, IDxc_Model_Jfo_Jfo_Case64 } from 'src/app/core/shared/models/Dxc_Model_Jfo_Jfo_Case64';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-jfo-case64',
  templateUrl: './list-normal-jfo-case64.component.html',
  styleUrls: ['./list-normal-jfo-case64.component.scss']
})
export class ListNormalJfoCase64Component implements OnInit, OnChanges {
  @Input() inputNormalJfoCase64: IDxc_Model_Jfo_Jfo_Case64;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
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
  jfoCase64Count: number;
  jfoCase64Results: IDxc_Model_Jfo_Jfo_Case64[];
  report_name: string;

  constructor(private ReportJfoJfoCase64: JfoJfoCase64Metadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'jfo-jfo-case64';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputNormalJfoCase64))
    this.ReportJfoJfoCase64.getSearchData();
    this.jfoCase64Results = this.ReportJfoJfoCase64.$results;
    this.jfoCase64Count = this.ReportJfoJfoCase64.$count;
  }

  ngOnInit() {
    this.ReportJfoJfoCase64.getSearchData();
    this.jfoCase64Results = this.ReportJfoJfoCase64.$results;
    this.jfoCase64Count = this.ReportJfoJfoCase64.$count;
    this.report_name = localStorage.getItem('report_name');
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['jfo'].sub[0]['jfoCase64'].img;
    this.departmentTitle = environment.qm.sub[0]['jfo'].title;

    if (title === 'ฐานข้อมูลกองทุนยุติธรรม (2564)') {
      console.log('case64');
      const jfoCase64Results = new Dxc_Model_Jfo_Jfo_Case64(Item);
      jfoCase64Results.setData(Item);
      const dataSet = jfoCase64Results.getData();
      localStorage.setItem('jfo-jfo-case64', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('jfo-jfo-case64'));
      this.person = {
        citizenCardNumber: this.selectItem.cardId,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: this.selectItem.sex,
        dateOfBirth: this.selectItem.dateOfBirth
      };
      this.departmentImg = departmentImg;
      console.log(this.selectItem);
    } else {
    }
    title = 'ฐานข้อมูลกองทุนยุติธรรม (2564)';
    this.selectData = JSON.parse(localStorage.getItem('jfo-jfo-case64'));
    this.htmlReport = this.ReportJfoJfoCase64.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    this.title = 'ฐานข้อมูลกองทุนยุติธรรม (2564)';
    this.reportName = '/ReportJfoJfoCase64';
    localStorage.setItem('jfo-jfo-case64', JSON.stringify(this.selectItem));
  }

   // เปิด Modal
   openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentJfoCase64Dialog, {
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
      $("#JfoJfoCase64").modal('toggle');
    });
  }
}

@Component({
  selector: 'dialog-content-jfo-case64-dialog',
  templateUrl: 'dialog-content-jfo-case64-dialog.html',
})
export class DialogContentJfoCase64Dialog {
  constructor(public dialogRef: MatDialogRef<DialogContentJfoCase64Dialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#jfo-case64-full-width-modal").modal("show");
    });

  }
}
