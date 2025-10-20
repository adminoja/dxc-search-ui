import { Dxc_Model_Person } from '../../../../../../shared/models/Dxc_Model_Person';
import { DopaMoiAddressesMetadata } from '../../../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-addresses/dxc-model-dopa-moi-addresses.interface';
import { IDxc_Model_Dopa_Moi_Addresses, Dxc_Model_Dopa_Moi_Addresses } from '../../../../../../shared/models/Dxc_Model_Dopa_Moi_Addresses';
import { Component, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';

declare var $;
@Component({
  selector: 'app-list-normal-addresses',
  templateUrl: './list-normal-addresses.component.html',
  styleUrls: ['./list-normal-addresses.component.scss']
})
export class ListNormalAddressesComponent implements OnInit {
  moidopaaddressesResults: IDxc_Model_Dopa_Moi_Addresses[];
  moidopaaddressesShow: boolean;
  moidopaaddressesCount: number;
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
  constructor(private ReportMoiDopaAddresses: DopaMoiAddressesMetadata , public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportMoiDopaAddresses.getSearchData();
    this.moidopaaddressesResults = this.ReportMoiDopaAddresses.$results;
    this.moidopaaddressesShow = this.ReportMoiDopaAddresses.$show;
    this.moidopaaddressesCount = this.ReportMoiDopaAddresses.$count;
    this.report_name = localStorage.getItem('report_name');
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dopa'].sub[0]['addresses'].img;
    this.departmentTitle = environment.qm.sub[0]['dopa'].title;
    const moiDopaAddresses = new Dxc_Model_Dopa_Moi_Addresses(Item);
    moiDopaAddresses.setData(Item);
    const dataSet = moiDopaAddresses.getData();
    const schema = environment.qm.sub[0]['dopa'].sub[0]['addresses'].schema;
    sessionStorage.setItem('dopa-moi-dopa-addresses', JSON.stringify(dataSet));
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
    this.htmlReport = this.ReportMoiDopaAddresses.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportMoiDopaAddresses';
    sessionStorage.setItem('dopa-moi-dopa-addresses', JSON.stringify(this.selectItem));
  }

   //เปิด Modal
   openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentAddressesDialog, {
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
  selector: 'dialog-content-addresses-dialog',
  templateUrl: 'dialog-content-addresses-dialog.html',
})
export class DialogContentAddressesDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentAddressesDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#addresses-full-width-modal").modal("show");
    });

  }
}

