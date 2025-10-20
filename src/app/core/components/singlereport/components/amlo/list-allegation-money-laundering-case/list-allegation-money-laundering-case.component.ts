import { Component, Inject, OnInit } from '@angular/core';
import { IDxc_Model_Amlo_Moneylaunderingcase, Dxc_Model_Amlo_Moneylaunderingcase } from 'src/app/core/shared/models/Dxc_Model_Amlo_Moneylaunderingcase';
import { AmloMoneylaunderingcaseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-amlo-money-laundering-case/dxc-model-amlo-money-laundering-case.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-allegation-money-laundering-case',
  templateUrl: './list-allegation-money-laundering-case.component.html',
  styleUrls: ['./list-allegation-money-laundering-case.component.scss']
})
export class ListAllegationMoneyLaunderingCaseComponent implements OnInit {
  moneylaunderingcaseResults: IDxc_Model_Amlo_Moneylaunderingcase[];
  moneylaunderingcaseCount: number;

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
  constructor(private ReportAmloMoneyLaunderingCase: AmloMoneylaunderingcaseMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportAmloMoneyLaunderingCase.getSearchData();
    this.moneylaunderingcaseResults = this.ReportAmloMoneyLaunderingCase.getResults();
    this.moneylaunderingcaseCount = this.ReportAmloMoneyLaunderingCase.getCount();
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['amlo'].sub[0]['moneylaunderingcase'].img;
    this.departmentTitle = environment.qm.sub[0]['amlo'].title;

    if (title === 'ข้อมูล ปปง.') {
      // filter DateOfBirth และ filter Sex
      console.log('1');
      const amloMoneylaunderingcase = new Dxc_Model_Amlo_Moneylaunderingcase(Item);
      const dataSet = amloMoneylaunderingcase.getData();
      localStorage.setItem('amlo-money-laundering-case', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('amlo-money-laundering-case'));
      // แสดง ข้อมูลเบื้องต้น ข้อมูลผู้ต้องหา/จำเลย
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.caseName + ' ' + this.selectItem.caseLastName,
        sex: this.selectItem.genderName,
        dateOfBirth: this.selectItem.birthDate
      };
      this.departmentImg = departmentImg;
      console.log(this.selectItem);
    } else {

    }
    if (title === 'ข้อมูล ปปง.') {
      console.log('2');

      this.selectData = JSON.parse(localStorage.getItem('amlo-money-laundering-case'));
      this.htmlReport = this.ReportAmloMoneyLaunderingCase.getHtml(this.selectItem, title);
      this.openDialog(this.selectData);
    } else {
    }
  }
  pdfPreviewlocal() {
    if (this.title === 'ข้อมูลประวัติคดี ปปง. (คดีถึงที่สุดแล้ว)') {
      console.log(this.title);
      this.reportName = '/ReportAmloMoneyLaunderingCase';
      localStorage.setItem('amlo-money-laundering-case', JSON.stringify(this.selectItem));
    } else {

    }
  }


  //เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentMoneyLaunderingCaseDialog, {
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
    this.htmlReport = report.getHtml(this.selectData, this.title);
    this.viewhtmlReport = report.viewgetHtml(this.selectData, this.title);
  }

}


@Component({
  selector: 'dialog-content-money-laundering-case-dialog',
  templateUrl: 'dialog-content-money-laundering-case-dialog.html',
})
export class DialogContentMoneyLaunderingCaseDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentMoneyLaunderingCaseDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#money-laundering-case-full-width-modal").modal("show");
    });

  }
}