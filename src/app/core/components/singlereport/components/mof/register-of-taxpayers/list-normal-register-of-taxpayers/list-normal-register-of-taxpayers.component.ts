import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MofRegisterOfTaxpayersMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-mof-register-of-taxpayers/dxc-model-mof-register-of-taxpayers.interface';
import { Dxc_Model_Mof_register_Of_Taxpayers, IDxc_Model_Mof_register_Of_Taxpayers } from 'src/app/core/shared/models/Dxc_Model_Mof_register_Of_Taxpayers';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-register-of-taxpayers',
  templateUrl: './list-normal-register-of-taxpayers.component.html',
  styleUrls: ['./list-normal-register-of-taxpayers.component.scss'],
  providers: [MofRegisterOfTaxpayersMetadata]
})
export class ListNormalRegisterOfTaxpayersComponent implements OnInit {

  registerOfTaxpayersResults: IDxc_Model_Mof_register_Of_Taxpayers[];
  registerOfTaxpayersCount: number;
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

  constructor(private ReportMofRegisterOfTaxpayers: MofRegisterOfTaxpayersMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportMofRegisterOfTaxpayers.getSearchData();
    this.registerOfTaxpayersResults = this.ReportMofRegisterOfTaxpayers.$results;
    this.registerOfTaxpayersCount = this.ReportMofRegisterOfTaxpayers.$count;
    
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    console.log(Item)
    console.log(title)
    console.log(departmentImg)
    this.title = title;
    this.img = environment.qm.sub[0]['mof'].sub[0]['registeroftaxpayers'].img;
    this.departmentTitle = environment.qm.sub[0]['mof'].title;
    const registeroftaxpayers = new Dxc_Model_Mof_register_Of_Taxpayers(Item);
    registeroftaxpayers.setData(Item);
    const dataSet = registeroftaxpayers.getData();
    const schema = environment.qm.sub[0]['mof'].sub[0]['registeroftaxpayers'].schema;
    sessionStorage.setItem('mof-register-of-taxpayers', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem(schema));
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(sessionStorage.getItem(schema));
    // this.htmlReport = this.ReportMofRegisterOfTaxpayers.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportMofRegisterOfTaxpayers';
    sessionStorage.setItem('mof-register-of-taxpayers', JSON.stringify(this.selectItem));
  }

   //เปิด Modal
   openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentRegisterOfTaxpayersDialog, {
      data: {
        title: this.title, //dbname
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
  selector: 'dialog-content-register-of-taxpayers-dialog',
  templateUrl: 'dialog-content-register-of-taxpayers-dialog.html',
})
export class DialogContentRegisterOfTaxpayersDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentRegisterOfTaxpayersDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#register-of-taxpayers-full-width-modal").modal("show");
    });

  }
}
