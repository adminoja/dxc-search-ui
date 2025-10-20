import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RtpCriminalCaseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-criminal-case/dxc-model-rtp-criminal-case.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { Dxc_Model_Rtp_CriminalCase, IDxc_Model_Rtp_CriminalCase } from 'src/app/core/shared/models/Dxc_Model_Rtp_CriminalCase';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-allegation-criminal-case',
  templateUrl: './list-allegation-criminal-case.component.html',
  styleUrls: ['./list-allegation-criminal-case.component.scss'],
  providers: [RtpCriminalCaseMetadata],
})
export class ListAllegationCriminalCaseComponent implements OnInit, OnChanges {
  @Input() inputAlgationsCriminalCase: IDxc_Model_Rtp_CriminalCase;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  criminalCaseResults: IDxc_Model_Rtp_CriminalCase[];
  criminalCaseCount: number;
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

  constructor(private ReportRtpCriminalCase: RtpCriminalCaseMetadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'rtp-criminal';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputAlgationsCriminalCase))
    this.ReportRtpCriminalCase.getSearchData();
    this.criminalCaseResults = this.ReportRtpCriminalCase.$results;
    this.criminalCaseCount = this.ReportRtpCriminalCase.$count;
  }

  ngOnInit() {
    this.ReportRtpCriminalCase.getSearchData();
    this.criminalCaseResults = this.ReportRtpCriminalCase.$results;
    this.criminalCaseCount = this.ReportRtpCriminalCase.$count;

    // this.criminalResults.sort(function (a, b) {
    //   return a.dataSubmitDate.localeCompare(b.dataSubmitDate);
    // });
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['rtp'].sub[0]['criminalcase'].img;
    this.departmentTitle = environment.qm.sub[0]['rtp'].title;

    const rtpcriminal = new Dxc_Model_Rtp_CriminalCase(Item);
    rtpcriminal.setData(Item);
    const dataSet = rtpcriminal.getData();
    localStorage.setItem('rtp-criminal-case', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('rtp-criminal-case'));
    // แสดง ข้อมูลเบื้องต้น คดีอาญา
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem('rtp-criminal-case'));
    this.htmlReport = this.ReportRtpCriminalCase.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    this.reportName = '/ReportRtpCriminalCase';
    localStorage.setItem('rtp-criminal-case', JSON.stringify(this.selectItem));
  }

  onCriminalSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentCriminalCaseDialog, {
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
  selector: 'dialog-content-criminal-case-dialog',
  templateUrl: 'dialog-content-criminal-case-dialog.html',
})
export class DialogContentCriminalCaseDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentCriminalCaseDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#criminal-full-width-modal").modal("show");
    });

  }
}
