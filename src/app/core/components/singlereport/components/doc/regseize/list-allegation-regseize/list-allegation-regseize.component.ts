import { DocRegseizeMetadata } from '../../../../../localsearch/qmreporttemplate/dxc-model-doc-reg-seize/dxc-model-doc-reg-seize.interface';
import { Dxc_Model_Person } from '../../../../../../shared/models/Dxc_Model_Person';
import { Component, OnInit, Inject, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Dxc_Model_Doc_Reg_seize, IDxc_Model_Doc_Reg_seize } from '../../../../../../shared/models/Dxc_Model_Doc_Reg_seize';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

declare var $;
@Component({
  selector: 'app-list-allegation-regseize',
  templateUrl: './list-allegation-regseize.component.html',
  styleUrls: ['./list-allegation-regseize.component.scss'],
  providers: [DocRegseizeMetadata]
})
export class ListAllegationRegseizeComponent implements OnInit, OnChanges {
  @Input() inputAlgationsRegseize: IDxc_Model_Doc_Reg_seize;
  @Input() inputRegseizeCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>();
  regseizeResults: IDxc_Model_Doc_Reg_seize[];
  regseizeShow: boolean;
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
  regseizeCount: number;

  constructor(private ReportDocRegseize: DocRegseizeMetadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.inputAlgationsRegseize !== undefined) {
      const schema = 'doc-reg-seize';
      localStorage.setItem(schema + 'Results', JSON.stringify(this.inputAlgationsRegseize));
      this.ReportDocRegseize.getSearchData();
      this.regseizeResults = this.ReportDocRegseize.$results;
      this.regseizeCount = this.ReportDocRegseize.$count;
    } else {
      const schema = 'doc-reg-seize';
      localStorage.setItem(schema + 'Results', JSON.stringify([]));
      this.ReportDocRegseize.getSearchData();
      this.regseizeResults = this.ReportDocRegseize.$results;
      this.regseizeCount = this.ReportDocRegseize.$count;
    }

  }

  ngOnInit() {
    this.ReportDocRegseize.getSearchData();
    this.regseizeResults = this.ReportDocRegseize.$results;
    this.regseizeShow = this.ReportDocRegseize.$show;
    this.regseizeCount = this.ReportDocRegseize.$count;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    console.log(Item + ' ' + title + ' ' + departmentImg);

    this.title = title;
    this.img = environment.qm.sub[0]['doc'].sub[0]['regseize'].img;
    this.departmentTitle = environment.qm.sub[0]['doc'].title;

    if (title === 'อายัดตัวผู้ต้องขัง') {
      // filter DateOfBirth และ filter Sex
      console.log('pass');
      const regseize = new Dxc_Model_Doc_Reg_seize(Item);
      regseize.setData(Item);
      const dataSet = regseize.getData();
      localStorage.setItem('doc-reg-seize', JSON.stringify(dataSet)); // localStorage.setItem(key, value) คือ การเก็บข้อมูลลงใน Local Storage
      this.selectItem = JSON.parse(localStorage.getItem('doc-reg-seize')); // localStorage.getItem(key) คือ การเรียกใช้ข้อมูล key ของ Local Storage
      // แสดง ข้อมูลเบื้องต้น อายัดตัวผู้ต้องขัง
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstname + ' ' + this.selectItem.lastname,
        sex: this.selectItem.sex,
        dateOfBirth: this.selectItem.dateOfBirth
      };
      this.departmentImg = departmentImg;
    } else {

    }
    if (title === 'อายัดตัวผู้ต้องขัง') {
      this.departmentImg = departmentImg;
      this.selectData = JSON.parse(localStorage.getItem('doc-reg-seize'));
      this.htmlReport = this.ReportDocRegseize.getHtml(this.selectItem, title);
      this.openDialog(this.selectItem);
    } else {
    }
  }

  pdfPreviewlocal() {
    if (this.title === 'อายัดตัวผู้ต้องขัง') {
      this.reportName = '/ReportDocRegseize';
      localStorage.setItem('doc-reg-seize', JSON.stringify(this.selectItem));
    } else {

    }
  }

  onRegseizeSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

  //เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(AllegationsRegseizeDialog, {
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
  selector: 'allegations-regseize-dialog',
  templateUrl: 'allegations-regseize-dialog.html',
})
export class AllegationsRegseizeDialog {
  constructor(public dialogRef: MatDialogRef<AllegationsRegseizeDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#regseize-full-width-modal").modal("show");
    });

  }
}

