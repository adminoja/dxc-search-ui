import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DopaMoiBirthCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-birthcertificates/dxc-model-dopa-moi-birthcertificates.interface';
import { Dxc_Model_Moi_Dopa_Birth_Certificates, IDxc_Model_Dopa_Moi_Birth_Certificates } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Birth_Certificates';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';
declare var $;
@Component({
  selector: 'app-list-table-birthcertificates',
  templateUrl: './list-table-birthcertificates.component.html',
  styleUrls: ['./list-table-birthcertificates.component.scss']
})
export class ListTableBirthcertificatesComponent implements OnInit {

  moiDopaBirthcertificatesResults: IDxc_Model_Dopa_Moi_Birth_Certificates[];
  moiDopaBirthcertificatesCount: number;
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

    const moiDopaBirthcertificates = new Dxc_Model_Moi_Dopa_Birth_Certificates(Item);
    moiDopaBirthcertificates.setData(Item);
    const dataSet = moiDopaBirthcertificates.getData();
    const schema = environment.qm.sub[0]['dopa'].sub[0]['birthcertificates'].schema;
    sessionStorage.setItem('dopa-moi-dopa-birth-certificates', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem(schema));
    // แสดง ข้อมูลเบื้องต้น ผู้ต้องขัง (คดีที่พิพากษาแล้ว)
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(sessionStorage.getItem(schema));
    this.htmlReport = this.Reportbirthcertificates.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    this.reportName = '/Reportbirthcertificates';
    localStorage.setItem('dopa-moi-dopa-birth-certificates', JSON.stringify(this.selectItem));
  }

   // เปิด Modal
   openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentBirthcertificatesTableDialog, {
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
  close() {
    $(document).ready(function () {
      $("#birthcertificates").modal('toggle');
    });
  }
}

@Component({
  selector: 'dialog-content-birthcertificates-table-dialog',
  templateUrl: 'dialog-content-birthcertificates-table-dialog.html',
})
export class DialogContentBirthcertificatesTableDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentBirthcertificatesTableDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#birthcertificates-table-full-width-modal").modal("show");
    });

  }
}