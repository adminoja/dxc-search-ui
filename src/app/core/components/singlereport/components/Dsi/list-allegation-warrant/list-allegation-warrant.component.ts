import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DsiWarrantMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dsi-warrant/dxc-model-dsi-warrant.interface';
import { Dxc_Model_Dsi_Warrant, IDxc_Model_Dsi_Warrant } from 'src/app/core/shared/models/Dxc_Model_Dsi_Warrant';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-allegation-warrant',
  templateUrl: './list-allegation-warrant.component.html',
  styleUrls: ['./list-allegation-warrant.component.scss'],
  providers: [DsiWarrantMetadata]
})
export class ListAllegationWarrantComponent implements OnInit {
  warrantResults: IDxc_Model_Dsi_Warrant[];
  warrantShow: boolean;
  warrantCount: number;
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

  constructor(private ReportDsiWarrant: DsiWarrantMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportDsiWarrant.getSearchData();
    this.warrantResults = this.ReportDsiWarrant.$results;
    this.warrantShow = this.ReportDsiWarrant.$show;
    this.warrantCount = this.ReportDsiWarrant.$count;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dsi'].sub[0]['warrant'].img;
    this.departmentTitle = environment.qm.sub[0]['dsi'].title;

    const warrant = new Dxc_Model_Dsi_Warrant(Item);
    warrant.setData(Item);
    const dataSet = warrant.getData();
    const schema = environment.qm.sub[0]['dsi'].sub[0]['warrant'].schema;
    localStorage.setItem('dsi-warrant', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem(schema));
    // แสดง ข้อมูลเบื้องต้น หมายจับคดีพิเศษ
    this.person = {
      citizenCardNumber: this.selectItem.idCard,
      fullName: this.selectItem.accused,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.dateOfBirth
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem(schema));
    this.htmlReport = this.ReportDsiWarrant.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
      this.reportName = '/ReportDsiWarrant';
      localStorage.setItem('dsi-warrant', JSON.stringify(this.selectItem));
  }
  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentWarrantDialog, {
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
}

  @Component({
    selector: 'dialog-content-warrant-dialog',
    templateUrl: 'dialog-content-warrant-dialog.html',
  })
  export class DialogContentWarrantDialog {
    constructor(public dialogRef: MatDialogRef<DialogContentWarrantDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
  
    }
    closeDialog(): void {
      this.dialogRef.close();
    }
    open() {
      $(document).ready(function () {
        $("#warrant-full-width-modal").modal("show");
      });
  
    }
}