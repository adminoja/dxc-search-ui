import { Component, Inject, OnInit } from '@angular/core';
import { Dxc_Model_Cifs_MissingPerson } from 'src/app/core/shared/models/Dxc_Model_Cifs_MissingPerson';
import { CifsMissingPersonMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-cifs-missing-person/dxc-model-cifs-missing_person.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';

declare var $;
@Component({
  selector: 'app-list-normal-missing-person',
  templateUrl: './list-normal-missing-person.component.html',
  styleUrls: ['./list-normal-missing-person.component.scss']
})
export class ListNormalMissingPersonComponent implements OnInit {
  cifsMissingPersonResults: Dxc_Model_Cifs_MissingPerson[];
  cifsMissingPersonCount: number;
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
  constructor(private ReportCifsMissingPerson: CifsMissingPersonMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportCifsMissingPerson.getSearchData();
    this.cifsMissingPersonResults = this.ReportCifsMissingPerson.$results;
    this.cifsMissingPersonCount = this.ReportCifsMissingPerson.$count;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['cifs'].sub[0]['missingperson'].img;
    this.departmentTitle = environment.qm.sub[0]['cifs'].title;

    const cifsMissingPerson = new Dxc_Model_Cifs_MissingPerson(Item);
    cifsMissingPerson.setData(Item);
    const dataSet = cifsMissingPerson.getData();
    localStorage.setItem('cifs-missing-person', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('cifs-missing-person'));
    // แสดง ข้อมูลเบื้องต้น
    this.person = {
      citizenCardNumber: '-',
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: ''
    };
    this.departmentImg = departmentImg;

    this.selectData = JSON.parse(localStorage.getItem('cifs-missing-person'));
    this.htmlReport = this.ReportCifsMissingPerson.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {

    this.reportName = '/ReportCifsMissingPerson';
    localStorage.setItem('cifs-missing-person', JSON.stringify(this.selectItem));
    console.log(this.selectItem);

  }

  //เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentMissingPersonDialog, {
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
        console.log(this.title)
        console.log(title_sub)
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
  selector: 'dialog-content-missing-person-dialog',
  templateUrl: 'dialog-content-missing-person-dialog.html',
})
export class DialogContentMissingPersonDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentMissingPersonDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#missing-person-full-width-modal").modal("show");
    });

  }
}
