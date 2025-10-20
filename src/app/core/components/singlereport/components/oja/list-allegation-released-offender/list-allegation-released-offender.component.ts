import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DocReleasedOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-released-offender/dxc-model-released-offender.interface';
import { Dxc_Model_Doc_ReleasedOffender, IDxc_Model_Doc_ReleasedOffender } from 'src/app/core/shared/models/Dxc_Model_Doc_ReleasedOffender';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-allegation-released-offender',
  templateUrl: './list-allegation-released-offender.component.html',
  styleUrls: ['./list-allegation-released-offender.component.scss']
})
export class ListAllegationReleasedOffenderComponent implements OnInit, OnChanges {
  @Input() inputAlgationsReleasedOffender: IDxc_Model_Doc_ReleasedOffender;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  releasedOffenderResults: IDxc_Model_Doc_ReleasedOffender[];
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
  releasedOffenderCount: number;
  releasedOffenderShow: boolean;

  constructor( private ReportDocReleasedOffender:DocReleasedOffenderMetadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'idb-released-offender';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputAlgationsReleasedOffender))
    this.ReportDocReleasedOffender.getSearchData();
    this.releasedOffenderResults = this.ReportDocReleasedOffender.$results;
    this.releasedOffenderCount = this.ReportDocReleasedOffender.$count;
  }

  ngOnInit() {
    this.ReportDocReleasedOffender.getSearchData();
    this.releasedOffenderResults = this.ReportDocReleasedOffender.$results;
    this.releasedOffenderShow = this.ReportDocReleasedOffender.$show;
    this.releasedOffenderCount = this.ReportDocReleasedOffender.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
      this.title = title;
      this.img = environment.qm.sub[0]['idb'].sub[0]['releasedoffender'].img;
      this.departmentTitle = environment.qm.sub[0]['idb'].title;

      const releasedOffender = new Dxc_Model_Doc_ReleasedOffender(Item);
      releasedOffender.setData(Item);
      const dataSet = releasedOffender.getData();
      localStorage.setItem('idb-released-offender', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('idb-released-offender'));
      // แสดง ข้อมูลเบื้องต้น
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: '-',
        dateOfBirth: '-'
      };
      this.departmentImg = departmentImg;
      this.selectData = JSON.parse(localStorage.getItem('idb-released-offender'));
      this.htmlReport = this.ReportDocReleasedOffender.getHtml(this.selectItem, title);
      this.openDialog(this.selectData);

  }

  pdfPreviewlocal() {

    this.reportName = '/ReportDocReleasedOffender';
    localStorage.setItem('idb-released-offender', JSON.stringify(this.selectItem));

  }

  onReleasedOffenderSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentReleasedOffenderDialog, {
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
        console.log(title_sub);
        console.log(this.title);
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
  selector: 'dialog-content-released-offender-dialog',
  templateUrl: 'dialog-content-released-offender-dialog.html',
})
export class DialogContentReleasedOffenderDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentReleasedOffenderDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#released-offender-full-width-modal").modal("show");
    });

  }
}
