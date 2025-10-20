import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Dxc_Model_Doc_Remandee } from 'src/app/core/shared/models/Dxc_Model_Doc_Remandee';
import { DocRemandeeMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-remandee/dxc-model-doc-remandee/dxc-model-doc-remandee.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

declare var $;
@Component({
  selector: 'app-list-allegaiton-remandee',
  templateUrl: './list-allegaiton-remandee.component.html',
  styleUrls: ['./list-allegaiton-remandee.component.scss'],
  providers: [DocRemandeeMetadata]
})
export class ListAllegaitonRemandeeComponent implements OnInit, OnChanges {
  @Input() inputAlgationsRemandee: Dxc_Model_Doc_Remandee;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>();
  remandeeResults: Dxc_Model_Doc_Remandee[];
  remandeeCount: number;
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


  constructor(private ReportDocRemandee: DocRemandeeMetadata, public dialog: MatDialog) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'doc-prisoner-no-just';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputAlgationsRemandee));
    this.ReportDocRemandee.getSearchData();
    this.remandeeResults = this.ReportDocRemandee.$results;
    this.remandeeCount = this.ReportDocRemandee.$count;
  }

  ngOnInit() {
    this.ReportDocRemandee.getSearchData();
    this.remandeeResults = this.ReportDocRemandee.$results;
    this.remandeeCount = this.ReportDocRemandee.$count;

  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['doc'].sub[0]['remandee'].img;
    this.departmentTitle = environment.qm.sub[0]['doc'].title;

    if (title === 'ผู้ต้องขัง (คดีที่ยังไม่พิพากษา)') {
      const docremandee = new Dxc_Model_Doc_Remandee(Item);
      docremandee.setData(Item);
      const dataSet = docremandee.getData();
      localStorage.setItem('doc-prisoner-no-just', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('doc-prisoner-no-just'));
      // แสดง ข้อมูลเบื้องต้น ผู้ต้องขัง (คดีที่ยังไม่พิพากษา)
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: this.selectItem.sex,
        dateOfBirth: this.selectItem.dateOfBirth
      };
      this.departmentImg = departmentImg;
    } else {

    }
    if (title === 'ผู้ต้องขัง (คดีที่ยังไม่พิพากษา)') {
      this.selectData = JSON.parse(localStorage.getItem('doc-prisoner-no-just'));
      this.htmlReport = this.ReportDocRemandee.getHtml(this.selectItem, title);
      this.openDialog(this.selectItem);
    } else {
    }
  }

  pdfPreviewlocal() {
    if (this.title === 'ผู้ต้องขัง (คดีที่ยังไม่พิพากษา)') {
      this.reportName = '/ReportDocRemandee';
      localStorage.setItem('doc-prisoner-no-just', JSON.stringify(this.selectItem));
    } else {

    }
  }

  close() {
    $(document).ready(function () {
      $("#Docpremandee").modal('toggle');
    });
  }

  onRemandeeSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

  //เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentRemandeeDialog, {
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
  selector: 'dialog-content-remandee-dialog',
  templateUrl: 'dialog-content-remandee-dialog.html',
})
export class DialogContentRemandeeDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentRemandeeDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#remandee-full-width-modal").modal("show");
    });

  }
}
