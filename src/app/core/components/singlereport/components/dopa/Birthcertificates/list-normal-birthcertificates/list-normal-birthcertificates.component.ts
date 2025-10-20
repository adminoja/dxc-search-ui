import { Dxc_Model_Moi_Dopa_Birth_Certificates, IDxc_Model_Dopa_Moi_Birth_Certificates } from './../../../../../../shared/models/Dxc_Model_Dopa_Moi_Birth_Certificates';

import { Component, Inject, OnInit } from '@angular/core';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { DopaMoiBirthCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-birthcertificates/dxc-model-dopa-moi-birthcertificates.interface';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-birthcertificates',
  templateUrl: './list-normal-birthcertificates.component.html',
  styleUrls: ['./list-normal-birthcertificates.component.scss']
})
export class ListNormalBirthcertificatesComponent implements OnInit {
  moiDopaBirthcertificatesResults: IDxc_Model_Dopa_Moi_Birth_Certificates[];
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
  moiDopaBirthcertificatesCount: number;
  report_name: string;

  constructor(private Reportbirthcertificates: DopaMoiBirthCertificatesMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.Reportbirthcertificates.getSearchData();
    this.moiDopaBirthcertificatesResults = this.Reportbirthcertificates.$results;
    this.moiDopaBirthcertificatesCount = this.Reportbirthcertificates.$count;
    this.report_name = localStorage.getItem('report_name');
  }


  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dopa'].sub[0]['birthcertificates'].img;
    this.departmentTitle = environment.qm.sub[0]['dopa'].title;

    const DopaBirthcertificates = new Dxc_Model_Moi_Dopa_Birth_Certificates(Item);
    DopaBirthcertificates.setData(Item);
    const dataSet = DopaBirthcertificates.getData();
    sessionStorage.setItem('moi-dopa-birth-certificates', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem('moi-dopa-birth-certificates'));
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.gender,
      dateOfBirth: this.selectItem.dateOfBirth
    };
    this.departmentImg = departmentImg;
    console.log(this.selectItem);

    title = 'ฐานข้อมูลใบสูติบัตร (Linkage)';
    this.selectData = JSON.parse(sessionStorage.getItem('moi-dopa-birth-certificates'));
    this.htmlReport = this.Reportbirthcertificates.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    this.title = 'ฐานข้อมูลใบสูติบัตร (Linkage)';
    this.reportName = '/Reportbirthcertificates';
    localStorage.setItem('moi-dopa-birth-certificates', JSON.stringify(this.selectItem));
  }

  //เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentBirthcertificatesDialog, {
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
  selector: 'dialog-content-birth-certificates-dialog',
  templateUrl: 'dialog-content-birth-certificates-dialog.html',
})
export class DialogContentBirthcertificatesDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentBirthcertificatesDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#birth-certificates-full-width-modal").modal("show");
    });

  }
}
