import { Dxc_Model_Jfo_Jfo_Case , IDxc_Model_Jfo_Jfo_Case } from 'src/app/core/shared/models/Dxc_Model_Jfo_Jfo_Case';
import { Component, Inject, OnInit } from '@angular/core';
import { JfoJfoCaseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-jfo-jfo-case/dxc-model-jfo-jfo-case.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';

declare var $;
@Component({
  selector: 'app-list-normal-jfo-case',
  templateUrl: './list-normal-jfo-case.component.html',
  styleUrls: ['./list-normal-jfo-case.component.scss'],
  providers: [

  ]
})
export class ListNormalJfoCaseComponent implements OnInit {
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
  jfoCaseCount: number;

  jfoCaseResults: IDxc_Model_Jfo_Jfo_Case[];
  constructor(private ReportJfoJfoCase: JfoJfoCaseMetadata, public dialog: MatDialog) { }
  ngOnInit() {
    this.ReportJfoJfoCase.getSearchData();
    this.jfoCaseResults = this.ReportJfoJfoCase.$results;
    this.jfoCaseCount = this.ReportJfoJfoCase.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['jfo'].sub[0]['jfoCase'].img;
    this.departmentTitle = environment.qm.sub[0]['jfo'].title;

    if (title === 'ฐานข้อมูลกองทุนยุติธรรม') {
      console.log('pass');
      const jfoCaseResults = new Dxc_Model_Jfo_Jfo_Case(Item);
      jfoCaseResults.setData(Item);
      const dataSet = jfoCaseResults.getData();
      localStorage.setItem('jfo-jfo-case', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('jfo-jfo-case'));
      this.person = {
        citizenCardNumber: this.selectItem.citizenId,
        fullName: '',
        sex: this.selectItem.sex,
        dateOfBirth: ''
      };
      this.departmentImg = departmentImg;
      console.log(this.selectItem);
    } else {
    }
    title = 'ฐานข้อมูลกองทุนยุติธรรม';
    this.selectData = JSON.parse(localStorage.getItem('jfo-jfo-case'));
    this.htmlReport = this.ReportJfoJfoCase.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    this.title = 'ฐานข้อมูลกองทุนยุติธรรม';
    this.reportName = '/ReportJfoJfoCase';
    localStorage.setItem('jfo-jfo-case', JSON.stringify(this.selectItem));
  }

   // เปิด Modal
   openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentJfoCaseDialog, {
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

  close() {
    $(document).ready(function () {
      $("#JfoJfoCase").modal('toggle');
    });
  }
}

@Component({
  selector: 'dialog-content-jfo-case-dialog',
  templateUrl: 'dialog-content-jfo-case-dialog.html',
})
export class DialogContentJfoCaseDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentJfoCaseDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#jfo-case-full-width-modal").modal("show");
    });

  }
}
