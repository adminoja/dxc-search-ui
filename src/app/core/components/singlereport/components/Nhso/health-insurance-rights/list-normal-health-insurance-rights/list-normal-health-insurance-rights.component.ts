import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NhsoMoiHealthInsuranceRightsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-nhso-moi-nhso-health-insurance-rights/dxc-model-nhso-moi-nhso-health-insurance-rights.interface';
import { Dxc_Model_Nhso_Moi_Health_Insurance_Rights, IDxc_Model_Nhso_Moi_Health_Insurance_Rights } from 'src/app/core/shared/models/Dxc_Model_Nhso_Moi_Health_Insurance_Rights';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-health-insurance-rights',
  templateUrl: './list-normal-health-insurance-rights.component.html',
  styleUrls: ['./list-normal-health-insurance-rights.component.scss']
})
export class ListNormalHealthInsuranceRightsComponent implements OnInit {
  healthInsuranceRightsResults: IDxc_Model_Nhso_Moi_Health_Insurance_Rights[];
  healthInsuranceRightsCount: number;
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

  constructor(private ReportNhsoMoiHealthInsuranceRights: NhsoMoiHealthInsuranceRightsMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportNhsoMoiHealthInsuranceRights.getSearchData();
    this.healthInsuranceRightsResults = this.ReportNhsoMoiHealthInsuranceRights.$results;
    this.healthInsuranceRightsCount = this.ReportNhsoMoiHealthInsuranceRights.$count;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['nhso'].sub[0]['healthinsuranceright'].img;
    this.departmentTitle = environment.qm.sub[0]['nhso'].title;

    const moinhsohealthinsurancerights = new Dxc_Model_Nhso_Moi_Health_Insurance_Rights(Item);
    moinhsohealthinsurancerights.setData(Item);
    const dataSet = moinhsohealthinsurancerights.getData();
    sessionStorage.setItem('nhso-moi-nhso-health-insurance-rights', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem('nhso-moi-nhso-health-insurance-rights'));
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: '-',
      sex: '-',
      dateOfBirth: '-'
    };
    this.departmentImg = departmentImg;
    console.log(this.selectItem);

    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(sessionStorage.getItem('nhso-moi-nhso-health-insurance-rights'));
    this.htmlReport = this.ReportNhsoMoiHealthInsuranceRights.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);

  }

  pdfPreviewlocal() {
    if (this.title === 'ฐานข้อมูลสิทธิประกันสุขภาพและการลงทะเบียนกับหน่วยบริการ (Linkage)') {
      this.reportName = '/ReportNhsoMoiHealthInsuranceRights';
      localStorage.setItem('nhso-moi-nhso-health-insurance-rights', JSON.stringify(this.selectItem));
    } else {

    }
  }

  //เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentHealthInsuranceRightsDialog, {
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
  selector: 'dialog-content-health-insurance-dialog',
  templateUrl: 'dialog-content-health-insurance-dialog.html',
})
export class DialogContentHealthInsuranceRightsDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentHealthInsuranceRightsDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#health-insurance-full-width-modal").modal("show");
    });

  }
}
