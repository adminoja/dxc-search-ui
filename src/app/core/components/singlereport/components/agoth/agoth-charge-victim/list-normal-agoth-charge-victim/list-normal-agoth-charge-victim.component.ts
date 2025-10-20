import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AgothChargeVictimMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-agoth-charge-victim/dxc-model-agoth-charge-victim.interface';
import { Dxc_Model_Agoth_ChargeVictim, IDxc_Model_Agoth_ChargeVictim } from 'src/app/core/shared/models/Dxc_Model_Agoth_ChargeVictim';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-agoth-charge-victim',
  templateUrl: './list-normal-agoth-charge-victim.component.html',
  styleUrls: ['./list-normal-agoth-charge-victim.component.scss']
})
export class ListNormalAgothChargeVictimComponent implements OnInit, OnChanges {
  @Input() inputNormalChargeVictim: IDxc_Model_Agoth_ChargeVictim;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  agothChargeVictimResults: IDxc_Model_Agoth_ChargeVictim[];
  agothChargeVictimShow: boolean;
  agothChargeVictimCount: number;
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
  constructor(private ReportAgothChargeVictim: AgothChargeVictimMetadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'agoth-charge-victim';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputNormalChargeVictim))
    this.ReportAgothChargeVictim.getSearchData();
    this.agothChargeVictimResults = this.ReportAgothChargeVictim.$results;
    this.agothChargeVictimCount = this.ReportAgothChargeVictim.$count;
  }
  ngOnInit() {

    this.ReportAgothChargeVictim.getSearchData();
    this.agothChargeVictimResults = this.ReportAgothChargeVictim.$results;
    this.agothChargeVictimShow = this.ReportAgothChargeVictim.$show;
    this.agothChargeVictimCount = this.ReportAgothChargeVictim.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['agoth'].sub[0]['chargeVictim'].img;
    this.departmentTitle = environment.qm.sub[0]['agoth'].title;

    const agothChargeVictim = new Dxc_Model_Agoth_ChargeVictim(Item);
    agothChargeVictim.setData(Item);
    const dataSet = agothChargeVictim.getData();
    const schema = environment.qm.sub[0]['agoth'].sub[0]['chargeVictim'].schema;
    localStorage.setItem('agoth-charge-victim', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem(schema));
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.citizenId,
      fullName: this.selectItem.name1 + ' ' + this.selectItem.surname1,
      sex: this.selectItem.genderName,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem(schema));
    this.htmlReport = this.ReportAgothChargeVictim.getHtml(this.selectItem, title);
    this.openDialog(this.selectItem);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportAgothChargeVictim';
    localStorage.setItem('agoth-charge-victim', JSON.stringify(this.selectItem));
  }

  onChargeVictimSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

  //เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentChargeVictimDialog, {
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
    this.htmlReport = report.getHtml(this.selectItem, this.title);
    this.viewhtmlReport = report.viewgetHtml(this.selectItem, this.title);
  }

}


@Component({
  selector: 'dialog-content-charge-victim-dialog',
  templateUrl: 'dialog-content-charge-victim-dialog.html',
})
export class DialogContentChargeVictimDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentChargeVictimDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#charge-victim-full-width-modal").modal("show");
    });

  }
}
