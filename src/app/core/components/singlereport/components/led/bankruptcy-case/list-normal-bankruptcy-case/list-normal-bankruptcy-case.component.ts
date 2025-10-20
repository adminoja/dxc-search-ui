import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IDxcModelLedBankruptcyCase, Dxc_Model_Led_BankruptcyCase } from 'src/app/core/shared/models/Dxc_Model_Led_BankruptcyCase';
import { LedBankruptcyCaseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-led-bankruptcy-case/dxc-model-led-bankruptcy-case.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { environment } from 'src/environments/environment';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';

declare var $;
@Component({
  selector: 'app-list-normal-bankruptcy-case',
  templateUrl: './list-normal-bankruptcy-case.component.html',
  styleUrls: ['./list-normal-bankruptcy-case.component.scss'],
  providers: [LedBankruptcyCaseMetadata]
})
export class ListNormalBankruptcyCaseComponent implements OnInit, OnChanges {
  @Input() inputNormalBankruptcyCase: IDxcModelLedBankruptcyCase;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  bankruptcyCaseResults: IDxcModelLedBankruptcyCase[];
  bankruptcyCaseCount: number;
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

  constructor(private ReportLedBankruptcyCase: LedBankruptcyCaseMetadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'led-bankruptcy-case';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputNormalBankruptcyCase))
    this.ReportLedBankruptcyCase.getSearchData();
    this.bankruptcyCaseResults = this.ReportLedBankruptcyCase.$results;
    this.bankruptcyCaseCount = this.ReportLedBankruptcyCase.$count;
  }

  ngOnInit() {
    this.ReportLedBankruptcyCase.getSearchData();
    this.bankruptcyCaseResults = this.ReportLedBankruptcyCase.$results;
    this.bankruptcyCaseCount = this.ReportLedBankruptcyCase.$count;

    // this.bankruptcyCaseResults.sort(function (a, b) {
    //   return a.defendantOrderNumber.localeCompare(b.defendantOrderNumber);
    // });
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['led'].sub[0]['bankruptcycase'].img;
    this.departmentTitle = environment.qm.sub[0]['led'].title;

    const ledbankruptcycase = new Dxc_Model_Led_BankruptcyCase(Item);
    ledbankruptcycase.setData(Item);
    const dataSet = ledbankruptcycase.getData();
    localStorage.setItem('led-bankruptcy-case', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('led-bankruptcy-case'));
    // แสดง ข้อมูลเบื้องต้น
    this.person = {
      citizenCardNumber: this.selectItem.defendantId,
      fullName: this.selectItem.defendantName + ' ' + this.selectItem.defendantSurname,
      sex: '-',
      dateOfBirth: '-'
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem('led-bankruptcy-case'));
    this.htmlReport = this.ReportLedBankruptcyCase.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportLedBankruptcyCase';
    localStorage.setItem('led-bankruptcy-case', JSON.stringify(this.selectItem));
    console.log(this.selectItem);
  }

  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentBankruptcyCaseDialog, {
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

  onBankruptcyCaseSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }
}

@Component({
  selector: 'dialog-content-bankruptcy-case-dialog',
  templateUrl: 'dialog-content-bankruptcy-case-dialog.html',
})
export class DialogContentBankruptcyCaseDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentBankruptcyCaseDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#bankruptcy-case-full-width-modal").modal("show");
    });

  }
}
