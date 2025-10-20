import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DjopJuvenileOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender/dxc-model-djop-juvenile-offender.interface';
import { Dxc_Model_Djop_JuvenileOffender } from 'src/app/core/shared/models/Dxc_Model_Djop_JuvenileOffender';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-allegation-juvenile-offender',
  templateUrl: './list-allegation-juvenile-offender.component.html',
  styleUrls: ['./list-allegation-juvenile-offender.component.scss']
})
export class ListAllegationJuvenileOffenderComponent implements OnInit, OnChanges {
  @Input() inputAlgationsJuvenileOffender: Dxc_Model_Djop_JuvenileOffender;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>();
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
  juvenileOffenderResults: Dxc_Model_Djop_JuvenileOffender[];
  juvenileOffenderCount: number;
  report_name: string;
  exitCode: any;
  constructor(
    private ReportJuvenileOffender: DjopJuvenileOffenderMetadata, public dialog: MatDialog
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'djop-juvenile-offender';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputAlgationsJuvenileOffender));
    this.ReportJuvenileOffender.getSearchData();
    this.juvenileOffenderResults = this.ReportJuvenileOffender.$results;
    this.juvenileOffenderCount = this.ReportJuvenileOffender.$count;
  }

  ngOnInit() {
    this.ReportJuvenileOffender.getSearchData();
    this.juvenileOffenderResults = this.ReportJuvenileOffender.$results;
    this.juvenileOffenderCount = this.ReportJuvenileOffender.$count;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.juvenileOffenderResults
    // this.juvenileOffenderResults.sort(function (a, b) {
    //   return a.receiveDate.localeCompare(b.receiveDate);
    // });
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['djop'].sub[0]['juvenileOffender65'].img;
    this.departmentTitle = environment.qm.sub[0]['djop'].title;

    if (title === 'เด็กหรือเยาวชนผู้กระทำผิด') {
      // filter DateOfBirth และ filter Sex
      console.log('pass');
      const djopjuvenileOffender = new Dxc_Model_Djop_JuvenileOffender(Item);
      djopjuvenileOffender.setData(Item);
      const dataSet = djopjuvenileOffender.getData();
      localStorage.setItem('djop-juvenile-offender', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('djop-juvenile-offender'));
      // แสดง ข้อมูลเบื้องต้น เด็กหรือเยาวชนผู้กระทำผิด
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: this.selectItem.sex,
        dateOfBirth: this.selectItem.birthDate
      };
      this.departmentImg = departmentImg;
      console.log(this.selectItem);
    }
    title = 'เด็กหรือเยาวชนผู้กระทำผิด';
    this.selectData = JSON.parse(localStorage.getItem('djop-juvenile-offender'));
    this.htmlReport = this.ReportJuvenileOffender.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);

  }

  pdfPreviewlocal() {
    this.title = 'เด็กหรือเยาวชนผู้กระทำผิด';
    this.reportName = '/ReportJuvenileOffender';
    localStorage.setItem('djop-juvenile-offender', JSON.stringify(this.selectItem));
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

  onJuvenileOffenderSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentJuvenileOffenderDialog, {
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
  selector: 'dialog-content-juvenile-offender-dialog',
  templateUrl: 'dialog-content-juvenile-offender-dialog.html',
})
export class DialogContentJuvenileOffenderDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentJuvenileOffenderDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#juvenile-offender-width-modal").modal("show");
    });

  }
}
