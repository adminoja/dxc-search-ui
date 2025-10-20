import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RtpCriminalRecordMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-criminal-record/dxc-model-rtp-criminal-record.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { Dxc_Model_Rtp_CriminalRecord, IDxc_Model_Rtp_CriminalRecord } from 'src/app/core/shared/models/Dxc_Model_Rtp_CriminalRecord';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-allegation-criminal-record',
  templateUrl: './list-allegation-criminal-record.component.html',
  styleUrls: ['./list-allegation-criminal-record.component.scss'],
  providers: [ RtpCriminalRecordMetadata ]
})
export class ListAllegationCriminalRecordComponent implements OnInit, OnChanges {
  @Input() inputAllgationsCriminalRecord: IDxc_Model_Rtp_CriminalRecord;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  criminalRecordResults: IDxc_Model_Rtp_CriminalRecord[];
  criminalRecordCount: number;
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
  constructor(private ReportRtpCriminalRecord: RtpCriminalRecordMetadata, public dialog: MatDialog) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'rtp-criminal-record';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputAllgationsCriminalRecord))
    this.ReportRtpCriminalRecord.getSearchData();
    this.criminalRecordResults = this.ReportRtpCriminalRecord.$results;
    this.criminalRecordCount = this.ReportRtpCriminalRecord.$count;
  }

  ngOnInit() {
    this.ReportRtpCriminalRecord.getSearchData();
    this.criminalRecordResults = this.ReportRtpCriminalRecord.$results;
    this.criminalRecordCount = this.ReportRtpCriminalRecord.$count;

  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['rtp'].sub[0]['criminalrecord'].img;
    this.departmentTitle = environment.qm.sub[0]['rtp'].title;

    const criminalrecord = new Dxc_Model_Rtp_CriminalRecord(Item);
    criminalrecord.setData(Item);
    const dataSet = criminalrecord.getData();
    localStorage.setItem('rtp-criminal-record', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('rtp-criminal-record'));
    // แสดง ข้อมูลเบื้องต้น ฐานข้อมูลทะเบียนประวัติอาชญากร
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.cardFName + ' ' + this.selectItem.cardLName,
      sex: '',
      dateOfBirth: ''
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem('rtp-criminal-record'));
    this.htmlReport = this.ReportRtpCriminalRecord.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportRtpCriminalRecord';
    localStorage.setItem('rtp-criminal-record', JSON.stringify(this.selectItem));
  }

  onCriminalSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

   // เปิด Modal
   openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentCriminalRecordDialog, {
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
    console.log(this.htmlReport)
    this.viewhtmlReport = report.viewgetHtml(this.selectData, this.title);
  }
}

@Component({
  selector: 'dialog-content-criminal-record-dialog',
  templateUrl: 'dialog-content-criminal-record-dialog.html',
})
export class DialogContentCriminalRecordDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentCriminalRecordDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#criminal-record-full-width-modal").modal("show");
    });

  }
}
