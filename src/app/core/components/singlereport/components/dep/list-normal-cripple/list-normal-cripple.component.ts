import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DepMoiCrippleMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dep-moi-cripple/dxc-model-dep-moi-cripple.interface';
import { Dxc_Model_Dep_Moi_Cripple, IDxc_Model_Dep_Moi_Cripple } from 'src/app/core/shared/models/Dxc_Model_Dep_Moi_Cripple';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-cripple',
  templateUrl: './list-normal-cripple.component.html',
  styleUrls: ['./list-normal-cripple.component.scss'],
  providers: [DepMoiCrippleMetadata]
})
export class ListNormalCrippleComponent implements OnInit {

  crippleResults: IDxc_Model_Dep_Moi_Cripple[];
  crippleCount: number;
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
  
  constructor(private ReportMoiDepcripple: DepMoiCrippleMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportMoiDepcripple.getSearchData();
    this.crippleResults = this.ReportMoiDepcripple.$results;
    this.crippleCount = this.ReportMoiDepcripple.$count;
    console.log( this.ReportMoiDepcripple.getSearchData());
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    console.log(this.title)
    this.img = environment.qm.sub[0]['dep'].sub[0]['cripple'].img;
    this.departmentTitle = environment.qm.sub[0]['dep'].title;

    const cripple = new Dxc_Model_Dep_Moi_Cripple(Item);
    cripple.setData(Item);
    const dataSet = cripple.getData();
    localStorage.setItem('dep-moi-dep-cripple', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('dep-moi-dep-cripple'));
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: '-',
      sex: '-',
      dateOfBirth: null
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem('dep-moi-dep-cripple'));
    this.htmlReport = this.ReportMoiDepcripple.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    this.reportName = '/ReportMoiDepcripple';
    localStorage.setItem('dep-moi-dep-cripple', JSON.stringify(this.selectItem));
    console.log(this.selectItem);
  }

   // เปิด Modal
   openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentcrippleDialog, {
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
    };
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
  selector: 'dialog-content-cripple-dialog',
  templateUrl: 'dialog-content-cripple-dialog.html',
})
export class DialogContentcrippleDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentcrippleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#cripple-full-width-modal").modal("show");
    });

  }
}
