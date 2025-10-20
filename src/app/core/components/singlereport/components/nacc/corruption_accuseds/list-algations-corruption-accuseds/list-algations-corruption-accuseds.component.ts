import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NaccMoiCorruptionAccusedsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-nacc-moi-corruption-accuseds/dxc-model-nacc-moi-corruption-accuseds.interface';
import { Dxc_Model_Nacc_Moi_Corruption_Accuseds, IDxc_Model_Nacc_Moi_Corruption_Accuseds } from 'src/app/core/shared/models/Dxc_Model_Nacc_Moi_Corruption_Accuseds';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-algations-corruption-accuseds',
  templateUrl: './list-algations-corruption-accuseds.component.html',
  styleUrls: ['./list-algations-corruption-accuseds.component.scss']
})
export class ListAlgationsCorruptionAccusedsComponent implements OnInit {
  corruptionResults: IDxc_Model_Nacc_Moi_Corruption_Accuseds[];
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
  corruptionCount: number;

  constructor(private ReportNaccCorruptionaccuseds: NaccMoiCorruptionAccusedsMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportNaccCorruptionaccuseds.getSearchData();
    this.corruptionResults = this.ReportNaccCorruptionaccuseds.$results;
    this.corruptionCount = this.ReportNaccCorruptionaccuseds.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['nacc'].sub[0]['corruptionaccuseds'].img;
    this.departmentTitle = environment.qm.sub[0]['nacc'].title;

    const corruption = new Dxc_Model_Nacc_Moi_Corruption_Accuseds(Item);
    corruption.setData(Item);
    const dataSet = corruption.getData();
    sessionStorage.setItem('nacc-moi-nacc-corruption-accuseds', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem('nacc-moi-nacc-corruption-accuseds'));
    // แสดง ข้อมูลเบื้องต้น
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.name + ' ' + this.selectItem.lastname,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(sessionStorage.getItem('nacc-moi-nacc-corruption-accuseds'));
    this.htmlReport = this.ReportNaccCorruptionaccuseds.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {

    this.reportName = '/ReportNaccCorruptionaccuseds';
    localStorage.setItem('nacc-moi-nacc-corruption-accuseds', JSON.stringify(this.selectItem));
    console.log(this.selectItem);

  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentCorruptionAccusedsDialog, {
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
  selector: 'dialog-content-corruption-accuseds-dialog',
  templateUrl: 'dialog-content-corruption-accuseds-dialog.html',
})
export class DialogContentCorruptionAccusedsDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentCorruptionAccusedsDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#corruption-accuseds-full-width-modal").modal("show");
    });

  }
}
