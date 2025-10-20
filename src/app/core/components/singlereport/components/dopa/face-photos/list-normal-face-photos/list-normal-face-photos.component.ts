import {
  DopaMoiFacePhotosMetadata
} from '../../../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-face-photos/dxc-model-dopa-moi-face-photos.interface';
import { IDxc_Model_Dopa_Moi_Face_Photos, Dxc_Model_Dopa_Moi_Face_Photos } from '../../../../../../shared/models/Dxc_Model_Dopa_Moi_Face_Photos';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-face-photos',
  templateUrl: './list-normal-face-photos.component.html',
  styleUrls: ['./list-normal-face-photos.component.scss'],
  providers: [
    DopaMoiFacePhotosMetadata
  ]
})
export class ListNormalFacePhotosComponent implements OnInit {
  moidopafacephotosResults: IDxc_Model_Dopa_Moi_Face_Photos[];
  moidopafacephotosShow: boolean;
  moidopafacephotosCount: number;
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
  imageTag: any;
  report_name: string
  constructor(private ReportMoiDopaFacePhotos: DopaMoiFacePhotosMetadata, public sanitizer: DomSanitizer, public dialog: MatDialog) { }
  ngOnInit() {
    this.ReportMoiDopaFacePhotos.getSearchData();
    this.moidopafacephotosResults = this.ReportMoiDopaFacePhotos.$results;
    this.moidopafacephotosShow = this.ReportMoiDopaFacePhotos.$show;
    this.moidopafacephotosCount = this.ReportMoiDopaFacePhotos.$count;
    this.report_name = localStorage.getItem('report_name')
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dopa'].sub[0]['facephotos'].img;
    this.departmentTitle = environment.qm.sub[0]['dopa'].title;

    const facephotos = new Dxc_Model_Dopa_Moi_Face_Photos(Item);
    facephotos.setData(Item);
    const dataSet = facephotos.getData();
    sessionStorage.setItem('dopa-moi-dopa-person-face-photo', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem('dopa-moi-dopa-person-face-photo'));
    // แสดง ข้อมูลเบื้องต้น
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(sessionStorage.getItem('dopa-moi-dopa-person-face-photo'));
    this.htmlReport = this.ReportMoiDopaFacePhotos.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {

    this.reportName = '/ReportMoiDopaFacePhotos';
    sessionStorage.setItem('dopa-moi-dopa-person-face-photo', JSON.stringify(this.selectItem));
    console.log(this.selectItem);

  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentFacephotosDialog, {
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

  close() {
    $(document).ready(function () {
      $("#DoppaMoiDopaFacephotos").modal('toggle');
    });
  }
}


@Component({
  selector: 'dialog-content-face-photo-dialog',
  templateUrl: 'dialog-content-face-photo-dialog.html',
})
export class DialogContentFacephotosDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentFacephotosDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#face-photo-full-width-modal").modal("show");
    });

  }
}
