import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RtpCriminalMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-criminal/dxc-model-rtp-criminal.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { Dxc_Model_Rtp_Criminal, IDxc_Model_Rtp_Criminal } from 'src/app/core/shared/models/Dxc_Model_Rtp_Criminal';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-allegation-criminal',
  templateUrl: './list-allegation-criminal.component.html',
  styleUrls: ['./list-allegation-criminal.component.scss'],
  providers: [RtpCriminalMetadata]
})
export class ListAllegationCriminalComponent implements OnInit, OnChanges {
  @Input() inputAlgationsCriminal: IDxc_Model_Rtp_Criminal;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  criminalResults: IDxc_Model_Rtp_Criminal[];
  criminalCount: number;
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

  constructor(private ReportRtpCriminal: RtpCriminalMetadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'rtp-criminal';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputAlgationsCriminal))
    this.ReportRtpCriminal.getSearchData();
    this.criminalResults = this.ReportRtpCriminal.$results;
    this.criminalCount = this.ReportRtpCriminal.$count;
  }

  ngOnInit() {
    this.ReportRtpCriminal.getSearchData();
    this.criminalResults = this.ReportRtpCriminal.$results;
    this.criminalCount = this.ReportRtpCriminal.$count;

    // this.criminalResults.sort(function (a, b) {
    //   return a.dataSubmitDate.localeCompare(b.dataSubmitDate);
    // });
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['rtp'].sub[0]['criminal'].img;
    this.departmentTitle = environment.qm.sub[0]['rtp'].title;

    const rtpcriminal = new Dxc_Model_Rtp_Criminal(Item);
    rtpcriminal.setData(Item);
    const dataSet = rtpcriminal.getData();
    localStorage.setItem('rtp-criminal', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('rtp-criminal'));
    // แสดง ข้อมูลเบื้องต้น ผู้กระทำผิดกฎหมาย
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem('rtp-criminal'));
    this.htmlReport = this.ReportRtpCriminal.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    this.reportName = '/ReportRtpCriminal';
    localStorage.setItem('rtp-criminal', JSON.stringify(this.selectItem));
  }

  onCriminalSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentCriminalDialog, {
      data: {
        title: this.title, // dbname
        img: this.img,
        departmentImg: this.departmentImg,
        departmentTitle: this.departmentTitle,
        reportName: this.reportName,
        selectData: this.selectData,
        viewhtmlReport: this.viewhtmlReport,
        person: this.person
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
  selector: 'dialog-content-criminal-dialog',
  templateUrl: 'dialog-content-criminal-dialog.html',
})
export class DialogContentCriminalDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentCriminalDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

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
