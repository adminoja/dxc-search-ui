import { Dxc_Model_Moi_Moac_Fisheries_Illegal } from './../../../../../../../shared/models/Dxc_Model_Moac_Moi_Fisheries_Illegal';
import { MoacMoiFisheriesIllegalMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-moac-moi-fisheries-illegal/dxc-model-moac-moi-fisheries-illegal.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-fisheriesillegal',
  templateUrl: './list-normal-fisheriesillegal.component.html',
  styleUrls: ['./list-normal-fisheriesillegal.component.scss'],
  providers: [
    MoacMoiFisheriesIllegalMetadata
  ]
})
export class ListNormalFisheriesillegalComponent implements OnInit {
  MoiMoacFisheriesillegalResults: Dxc_Model_Moi_Moac_Fisheries_Illegal[];
  MoiMoacFisheriesillegalCount: number;

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

  constructor(private ReportMoacMoiFisheriesIllegal: MoacMoiFisheriesIllegalMetadata, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.ReportMoacMoiFisheriesIllegal.getSearchData();
    this.MoiMoacFisheriesillegalResults = this.ReportMoacMoiFisheriesIllegal.$results;
    this.MoiMoacFisheriesillegalCount = this.ReportMoacMoiFisheriesIllegal.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['moac'].sub[0]['fisheriesillegal'].img;
    this.departmentTitle = environment.qm.sub[0]['moac'].title;

    if (title === 'คดีประมงผิดกฎหมาย(Linkage)') {
      // filter DateOfBirth และ filter Sex
      console.log('1');
      const moacmoiFisheriesIllegal = new Dxc_Model_Moi_Moac_Fisheries_Illegal(Item);
      moacmoiFisheriesIllegal.setData(Item);
      const dataSet = moacmoiFisheriesIllegal.getData();
      localStorage.setItem('moac-moi-moac-fisheries-illegal-fishing-cases', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('moac-moi-moac-fisheries-illegal-fishing-cases'));
      // แสดง ข้อมูลเบื้องต้น คดีประมงผิดกฎหมาย(Linkage)
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: '-',
        sex: '-',
        dateOfBirth: '-'
      };
      this.departmentImg = departmentImg;
      console.log(this.selectItem);
    } else {

    }
    if (title === 'คดีประมงผิดกฎหมาย(Linkage)') {
      console.log('2');

      this.selectData = JSON.parse(localStorage.getItem('moac-moi-moac-fisheries-illegal-fishing-cases'));
      this.htmlReport = this.ReportMoacMoiFisheriesIllegal.getHtml(this.selectItem, title);
      this.openDialog(this.selectData);
    } else {
    }
  }

  pdfPreviewlocal() {
    if (this.title === 'คดีประมงผิดกฎหมาย(Linkage)') {
      console.log(this.title);
      this.reportName = '/ReportMoacMoiFisheriesIllegal';
      localStorage.setItem('moac-moi-moac-fisheries-illegal-fishing-cases', JSON.stringify(this.selectItem));
    } else {

    }
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentFisheriesIllegalDialog, {
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
  selector: 'dialog-content-fisheries-illegal-fishing-cases-dialog',
  templateUrl: 'dialog-content-fisheries-illegal-fishing-cases-dialog.html',
})
export class DialogContentFisheriesIllegalDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentFisheriesIllegalDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#fisheries-illegal-fishing-cases-full-width-modal").modal("show");
    });

  }
}

