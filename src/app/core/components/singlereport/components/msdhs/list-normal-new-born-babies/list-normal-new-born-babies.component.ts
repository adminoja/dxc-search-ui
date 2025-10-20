import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MsdhsMoiNewBornBabiesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-msdhs-moi-new-born-babies/dxc-model-msdhs-moi-new-born-babies.interface';
import { Dxc_Model_Msdhs_Moi_New_Born_Babies, IDxc_Model_Msdhs_Moi_New_Born_Babies } from 'src/app/core/shared/models/Dxc_Model_Msdhs_Moi_New_Born_Babies';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-new-born-babies',
  templateUrl: './list-normal-new-born-babies.component.html',
  styleUrls: ['./list-normal-new-born-babies.component.scss'],
  providers: [MsdhsMoiNewBornBabiesMetadata]
})
export class ListNormalNewBornBabiesComponent implements OnInit {
  newBornBabiesResults: IDxc_Model_Msdhs_Moi_New_Born_Babies[];
  newBornBabiesCount: number;
  title: string; // ชื่อหน่วยงานย่อย
  selectItem: any;
  person: Dxc_Model_Person;
  departmentImg: string; // รูปภาพหน่วยงานหลัก
  selectData: number = null;
  htmlReport: any;
  viewhtmlReport: any;
  reportName: string;
  departmentTitle: string; // ชื่อหน่วยงานหลัก
  img: string; // รูปภาพหน่วยงานย่อย

  constructor(private ReportMsdhsMoiNewBornBabies: MsdhsMoiNewBornBabiesMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportMsdhsMoiNewBornBabies.getSearchData();
    this.newBornBabiesResults = this.ReportMsdhsMoiNewBornBabies.$results;
    this.newBornBabiesCount = this.ReportMsdhsMoiNewBornBabies.$count;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['msdhs'].sub[0]['newbornbabies'].img;
    this.departmentTitle = environment.qm.sub[0]['msdhs'].title;

    const alienworkforces = new Dxc_Model_Msdhs_Moi_New_Born_Babies(Item);
    const dataSet = alienworkforces.getData();
    localStorage.setItem('msdhs-moi-msdhs-new-born-babies', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('msdhs-moi-msdhs-new-born-babies'));
    // แสดง ข้อมูลเบื้องต้น
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.childName + this.selectItem.childSurname,
      sex: '-',
      dateOfBirth: null

    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem('msdhs-moi-msdhs-new-born-babies'));
    this.htmlReport = this.ReportMsdhsMoiNewBornBabies.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
 }
  pdfPreviewlocal() {
    this.reportName = '/ReportMsdhsMoiNewBornBabies';
    localStorage.setItem('msdhs-moi-msdhs-new-born-babies', JSON.stringify(this.selectItem));
    console.log(this.selectItem);
  }

   // เปิด Modal
   openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentNewBornBabiesDialog, {
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
  selector: 'dialog-content-new-born-babies-dialog',
  templateUrl: 'dialog-content-new-born-babies-dialog.html',
})
export class DialogContentNewBornBabiesDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentNewBornBabiesDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#new-born-babies-full-width-modal").modal("show");
    });

  }
}
