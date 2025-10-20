import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter, Inject } from '@angular/core';
import { Dxc_Model_Doc_Prisoner } from 'src/app/core/shared/models/Dxc_Model_Doc_Prisoner';
import { DocPrisonerMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';

declare var $;
@Component({
  selector: 'app-list-algations-prisoner',
  templateUrl: './list-algations-prisoner.component.html',
  styleUrls: ['./list-algations-prisoner.component.css']
})
export class ListAlgationsPrisonerComponent implements OnInit, OnChanges {
  @Input() inputAlgationsPrisoner: Dxc_Model_Doc_Prisoner;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>();
  prisonerResults: Dxc_Model_Doc_Prisoner[];
  prisonerCount: number;
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


  constructor(private ReportDocPrisoner: DocPrisonerMetadata, public dialog: MatDialog) {
  }
  ngOnChanges(changes: SimpleChanges): void {  
    if (this.inputAlgationsPrisoner !== undefined) {
      const schema = 'doc-prisoner';
      localStorage.setItem(schema + 'Results', JSON.stringify(this.inputAlgationsPrisoner));
      this.ReportDocPrisoner.getSearchData();
      this.prisonerResults = this.ReportDocPrisoner.$results;
      this.prisonerCount = this.ReportDocPrisoner.$count;

    } else {
      const schema = 'doc-prisoner';
      localStorage.setItem(schema + 'Results', JSON.stringify([]))
      this.ReportDocPrisoner.getSearchData();
      this.prisonerResults = this.ReportDocPrisoner.$results;
      this.prisonerCount = this.ReportDocPrisoner.$count;
  
    }
  }

  ngOnInit() {
    this.ReportDocPrisoner.getSearchData();
    this.prisonerResults = this.ReportDocPrisoner.$results;
    this.prisonerCount = this.ReportDocPrisoner.$count;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.prisonerResults
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['doc'].sub[0]['prisoner'].img;
    this.departmentTitle = environment.qm.sub[0]['doc'].title;

    if (title === 'ผู้ต้องขัง (คดีที่พิพากษาแล้ว)') {

      const docprisoner = new Dxc_Model_Doc_Prisoner(Item);
      docprisoner.setData(Item);
      const dataSet = docprisoner.getData();
      localStorage.setItem('doc-prisoner', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('doc-prisoner'));
      // แสดง ข้อมูลเบื้องต้น ผู้ต้องขัง (คดีที่พิพากษาแล้ว)
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: this.selectItem.sex,
        dateOfBirth: this.selectItem.dateOfBirth
      };
      this.departmentImg = departmentImg;
    } else {

    }
    if (title === 'ผู้ต้องขัง (คดีที่พิพากษาแล้ว)') {
      this.selectData = JSON.parse(localStorage.getItem('doc-prisoner'));
      this.htmlReport = this.ReportDocPrisoner.getHtml(this.selectItem, title);
      this.openDialog(this.selectItem);
    } else {
    }
  }

  pdfPreview() {
    if (this.title === 'ผู้ต้องขัง (คดีที่พิพากษาแล้ว)') {
      this.reportName = '/ReportDocPrisoner';
      localStorage.setItem('doc-prisoner', JSON.stringify(this.selectItem));
    } else {

    }
  }

  onPrisonerSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentPrisonerDialog, {
      data: {
        title: this.title, // dbname
        img: this.img,
        departmentImg: this.departmentImg,
        departmentTitle: this.departmentTitle,
        reportName: this.reportName,
        selectData: this.selectData,
        viewhtmlReport: this.viewhtmlReport,
        person: this.person,
        pdfPreview: () => this.pdfPreview() // ✅ ส่งฟังก์ชันนี้เข้าไป
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
  selector: 'dialog-content-prisoner-dialog',
  templateUrl: 'dialog-content-prisoner-dialog.html',
})
export class DialogContentPrisonerDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentPrisonerDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#prisoner-full-width-modal").modal("show");
    });

  }
}
