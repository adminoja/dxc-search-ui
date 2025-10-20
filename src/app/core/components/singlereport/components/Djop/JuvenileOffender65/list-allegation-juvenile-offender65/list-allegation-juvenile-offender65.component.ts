import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DjopJuvenileOffender65Metadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender65/dxc-model-djop-juvenile-offender65.interface';
import { Dxc_Model_Djop_JuvenileOffender } from 'src/app/core/shared/models/Dxc_Model_Djop_JuvenileOffender';
import { Dxc_Model_Djop_JuvenileOffender65, IDxc_Model_Djop_JuvenileOffender65 } from 'src/app/core/shared/models/Dxc_Model_Djop_JuvenileOffender65';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-allegation-juvenile-offender65',
  templateUrl: './list-allegation-juvenile-offender65.component.html',
  styleUrls: ['./list-allegation-juvenile-offender65.component.scss'],
  providers: [DjopJuvenileOffender65Metadata]
})
export class ListAllegationJuvenileOffender65Component implements OnInit, OnChanges {
  @Input() inputAlgationsJuvenileOffender65: IDxc_Model_Djop_JuvenileOffender65;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>();
  juvenileOffender65Results: IDxc_Model_Djop_JuvenileOffender65[];
  juvenileOffender65Show: boolean;
  juvenileOffender65Count: number;
  juvenileOffender65CaseList: IDxc_Model_Djop_JuvenileOffender65[];
  title: string; // ชื่อหน่วยงานย่อย
  selectItem: any;
  person: Dxc_Model_Person;
  img: string; // รูปภาพหน่วยงานย่อย
  departmentImg: string; // รูปภาพหน่วยงานหลัก
  departmentTitle: string; // ชื่อหน่วยงานหลัก
  selectData: number = null;
  htmlReport: any;
  reportName: string;
  viewhtmlReport: any;
  caseList: any;

  constructor(private ReportDjopJuvenileOffender65: DjopJuvenileOffender65Metadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'djop-juvenile-offender-new';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputAlgationsJuvenileOffender65));
    this.ReportDjopJuvenileOffender65.getSearchData();
    this.juvenileOffender65Results = this.ReportDjopJuvenileOffender65.$results;
    this.juvenileOffender65Count = this.ReportDjopJuvenileOffender65.$count;
  }

  ngOnInit(): void {
    this.ReportDjopJuvenileOffender65.getSearchData();
    this.juvenileOffender65Results = this.ReportDjopJuvenileOffender65.$results;
    this.juvenileOffender65Show = this.ReportDjopJuvenileOffender65.$show;
    this.juvenileOffender65Count = this.ReportDjopJuvenileOffender65.$count;
    this.juvenileOffender65CaseList = this.ReportDjopJuvenileOffender65.$results;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['djop'].sub[0]['juvenileOffender65'].img;
    this.departmentTitle = environment.qm.sub[0]['djop'].title;

    if (title === 'เด็กหรือเยาวชนผู้กระทำผิด') {
      const djopjuvenileOffender65 = new Dxc_Model_Djop_JuvenileOffender65(Item);
      djopjuvenileOffender65.setData(Item);
      const dataSet = djopjuvenileOffender65.getData();
      localStorage.setItem('djop-juvenile-offender-new', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('djop-juvenile-offender-new'));
      // แสดง ข้อมูลเบื้องต้น เด็กหรือเยาวชนผู้กระทำผิด
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: this.selectItem.sex,
        dateOfBirth: this.selectItem.birthDate
      };
      this.departmentImg = departmentImg;
    }
    title = 'เด็กหรือเยาวชนผู้กระทำผิด';
    this.selectData = JSON.parse(localStorage.getItem('djop-juvenile-offender-new'));
    this.htmlReport = this.ReportDjopJuvenileOffender65.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);

  }

  pdfPreviewlocal() {
    this.reportName = '/ReportDjopJuvenileOffender65';
    localStorage.setItem('djop-juvenile-offender-new', JSON.stringify(this.selectItem));
  }  
  
  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentJuvenileOffender65Dialog, {
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
  selector: 'dialog-content-juvenile-offender65-dialog',
  templateUrl: 'dialog-content-juvenile-offender65-dialog.html',
})
export class DialogContentJuvenileOffender65Dialog {
  constructor(public dialogRef: MatDialogRef<DialogContentJuvenileOffender65Dialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#juvenile-offender65-width-modal").modal("show");
    });

  }
}
