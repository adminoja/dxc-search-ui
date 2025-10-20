import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DcaMoiThailanfPassportMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dca-moi-thailand-passport/dxc-model-dca-moi-thailand-passport.interface';
import { Dxc_Model_Dca_Moi_Thailand_Passport, IDxc_Model_Dca_Moi_Thailand_Passport } from 'src/app/core/shared/models/Dxc_Model_Dca_Moi_Thailand_Passport';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-thailand-passport',
  templateUrl: './list-normal-thailand-passport.component.html',
  styleUrls: ['./list-normal-thailand-passport.component.scss'],
  providers: [DcaMoiThailanfPassportMetadata]
})
export class ListNormalThailandPassportComponent implements OnInit {

  thailandPassportResults: IDxc_Model_Dca_Moi_Thailand_Passport[];
  thailandPassportCount: number;
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

  constructor(private ReportMoiMfaThailandPassport: DcaMoiThailanfPassportMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportMoiMfaThailandPassport.getSearchData();
    this.thailandPassportResults = this.ReportMoiMfaThailandPassport.$results;
    // this.moidopaaddressesShow = this.ReportMoiMfaThailandPassport.$show;
    this.thailandPassportCount = this.ReportMoiMfaThailandPassport.$count;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dca'].sub[0]['thailandPassport'].img;
    this.departmentTitle = environment.qm.sub[0]['dca'].title;
    const thailandPassport = new Dxc_Model_Dca_Moi_Thailand_Passport(Item);
    thailandPassport.setData(Item);
    const dataSet = thailandPassport.getData();
    const schema = environment.qm.sub[0]['dca'].sub[0]['thailandPassport'].schema;
    sessionStorage.setItem('dca-thailand-passport', JSON.stringify(dataSet));
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
    this.htmlReport = this.ReportMoiMfaThailandPassport.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportMoiMfaThailandPassport';
    sessionStorage.setItem('dca-thailand-passport', JSON.stringify(this.selectItem));
  }

   //เปิด Modal
   openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentThailandPassportDialog, {
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
  selector: 'dialog-content-thailand-passport-dialog',
  templateUrl: 'dialog-content-thailand-passport-dialog.html',
})
export class DialogContentThailandPassportDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentThailandPassportDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#thailand-passport-full-width-modal").modal("show");
    });

  }
}
