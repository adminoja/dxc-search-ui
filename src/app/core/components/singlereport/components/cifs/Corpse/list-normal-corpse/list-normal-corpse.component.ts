import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CifsCorpseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-cifs-corpse/dxc-model-cifs-corpse.interface';
import { Dxc_Model_Cifs_Corpse, IDxc_Model_Cifs_Corpse } from 'src/app/core/shared/models/Dxc_Model_Cifs_Corpse';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-corpse',
  templateUrl: './list-normal-corpse.component.html',
  styleUrls: ['./list-normal-corpse.component.scss']
})
export class ListNormalCorpseComponent implements OnInit, OnChanges {
  @Input() inputNormalCorpse: IDxc_Model_Cifs_Corpse;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  corpseResults: IDxc_Model_Cifs_Corpse[];
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
  corpseCount: number;
  constructor(private ReportCifsCifsCorpse: CifsCorpseMetadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'cifs-corpse';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputNormalCorpse))
    this.ReportCifsCifsCorpse.getSearchData();
    this.corpseResults = this.ReportCifsCifsCorpse.$results;
    this.corpseCount = this.ReportCifsCifsCorpse.$count;
  }

  ngOnInit() {
    this.ReportCifsCifsCorpse.getSearchData();
    this.corpseResults = this.ReportCifsCifsCorpse.$results;
    this.corpseCount = this.ReportCifsCifsCorpse.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['cifs'].sub[0]['corpse'].img;
    this.departmentTitle = environment.qm.sub[0]['cifs'].title;

    const corpse = new Dxc_Model_Cifs_Corpse(Item);
    corpse.setData(Item);
    const dataSet = corpse.getData();
    localStorage.setItem('cifs-corpse', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('cifs-corpse'));
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.personNationalityText,
      fullName: this.selectItem.personGivenName + ' ' + this.selectItem.personSurName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;

    this.selectData = JSON.parse(localStorage.getItem('cifs-corpse'));
    this.htmlReport = this.ReportCifsCifsCorpse.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {

      this.reportName = '/ReportCifsCifsCorpse';
      localStorage.setItem('cifs-corpse', JSON.stringify(this.selectItem));
      console.log(this.selectItem);
    this.reportName = '/ReportCifsCifsCorpse';
    localStorage.setItem('cifs-corpse', JSON.stringify(this.selectItem));
    console.log(this.selectItem);

  }

  onCorpsesSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

  //เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentcorpseDialog, {
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
  selector: 'dialog-content-corpse-dialog',
  templateUrl: 'dialog-content-corpse-dialog.html',
})
export class DialogContentcorpseDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentcorpseDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#corpse-full-width-modal").modal("show");
    });

  }
}