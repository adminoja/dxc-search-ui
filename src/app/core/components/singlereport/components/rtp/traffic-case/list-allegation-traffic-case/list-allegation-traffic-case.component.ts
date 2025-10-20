import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RtpTrafficCaseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-traffic-case/dxc-model-rtp-traffic-case.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { Dxc_Model_Rtp_TrafficCase, IDxc_Model_Rtp_TrafficCase } from 'src/app/core/shared/models/Dxc_Model_Rtp_TrafficCase';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;

@Component({
  selector: 'app-list-allegation-traffic-case',
  templateUrl: './list-allegation-traffic-case.component.html',
  styleUrls: ['./list-allegation-traffic-case.component.scss']
})
export class ListAllegationTrafficCaseComponent implements OnInit {
  trafficCaseResults: IDxc_Model_Rtp_TrafficCase[];
  trafficCaseCount: number;

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
  constructor( private ReportRtpTrafficCase: RtpTrafficCaseMetadata, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ReportRtpTrafficCase.getSearchData();
    this.trafficCaseResults = this.ReportRtpTrafficCase.$results;
    this.trafficCaseCount = this.ReportRtpTrafficCase.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['rtp'].sub[0]['trafficcase'].img;
    this.departmentTitle = environment.qm.sub[0]['rtp'].title;

    if (title === 'ฐานข้อมูลคดีจราจร') {
      // filter DateOfBirth และ filter Sex
      console.log('1');
      const trafficCase = new Dxc_Model_Rtp_TrafficCase(Item);
      trafficCase.setData(Item);
      const dataSet = trafficCase.getData();
      localStorage.setItem('rtp-traffic-case', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('rtp-traffic-case'));
      // แสดง ข้อมูลเบื้องต้น คดีประมงผิดกฎหมาย(Linkage)
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.accusedsName,
        sex: '-',
        dateOfBirth: '-'
      };
      this.departmentImg = departmentImg;
      console.log(this.selectItem);
    } else {

    }
    if (title === 'ฐานข้อมูลคดีจราจร') {
      console.log('2');

      this.selectData = JSON.parse(localStorage.getItem('rtp-traffic-case'));
      this.htmlReport = this.ReportRtpTrafficCase.getHtml(this.selectItem, title);
      this.openDialog(this.selectData);
    } else {
    }
  }

  pdfPreviewlocal() {
    if (this.title === 'ฐานข้อมูลคดีจราจร') {
      console.log(this.title);
      this.reportName = '/ReportRtpTrafficCase';
      localStorage.setItem('rtp-traffic-case', JSON.stringify(this.selectItem));
    } else {

    }
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentTrafficCaseDialog, {
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
  selector: 'dialog-content-traffi-case-dialog',
  templateUrl: 'dialog-content-traffi-case-dialog.html',
})
export class DialogContentTrafficCaseDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentTrafficCaseDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#traffi-case-full-width-modal").modal("show");
    });

  }
}

