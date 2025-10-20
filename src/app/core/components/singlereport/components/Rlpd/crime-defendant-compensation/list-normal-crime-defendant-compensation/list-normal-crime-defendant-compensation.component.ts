import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RlpdCrimeDefendantCompensationMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-crime-defendant-compensation/dxc-model-rlpd-crime-defendant-compensation.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { Dxc_Model_Rlpd_CrimeDefendantCompensation, IDxc_Model_Rlpd_CrimeDefendantCompensation } from 'src/app/core/shared/models/Dxc_Model_Rlpd_CrimeDefendantCompensation';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-crime-defendant-compensation',
  templateUrl: './list-normal-crime-defendant-compensation.component.html',
  styleUrls: ['./list-normal-crime-defendant-compensation.component.scss'],
  providers: [RlpdCrimeDefendantCompensationMetadata]
})
export class ListNormalCrimeDefendantCompensationComponent implements OnInit, OnChanges {
  @Input() inputNormalCrimeDefendantCompensation: IDxc_Model_Rlpd_CrimeDefendantCompensation;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  crimeDefendantCompensationResults: IDxc_Model_Rlpd_CrimeDefendantCompensation[];
  crimeDefendantCompensationCount: number;
  title: string; // ชื่อหน่วยงานย่อย
  selectItem: any;
  person: Dxc_Model_Person;
  departmentImg: string; // รูปภาพหน่วยงานหลัก
  selectData: number = null;
  htmlReport: any;
  viewhtmlReport: any;
  reportName: string;
  img: string;
  departmentTitle: string;

  constructor(private ReportRlpdCrimeDefendantCompensation: RlpdCrimeDefendantCompensationMetadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'rlpd-crime-defendant-compensation';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputNormalCrimeDefendantCompensation));
    this.ReportRlpdCrimeDefendantCompensation.getSearchData();
    this.crimeDefendantCompensationResults = this.ReportRlpdCrimeDefendantCompensation.$results;
    this.crimeDefendantCompensationCount = this.ReportRlpdCrimeDefendantCompensation.$count;
  }

  ngOnInit() {
    this.ReportRlpdCrimeDefendantCompensation.getSearchData();
    this.crimeDefendantCompensationResults = this.ReportRlpdCrimeDefendantCompensation.$results;
    this.crimeDefendantCompensationCount = this.ReportRlpdCrimeDefendantCompensation.$count;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['rlpd'].sub[0]['crimedefendantcompensation'].img;
    this.departmentTitle = environment.qm.sub[0]['rlpd'].title;

    const warrant = new Dxc_Model_Rlpd_CrimeDefendantCompensation(Item);
    const dataSet = warrant.getData();
    localStorage.setItem('rlpd-crime-defendant-compensation', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('rlpd-crime-defendant-compensation'));
    // แสดง ข้อมูลเบื้องต้น ผู้กระทำผิดกฎหมาย
    this.person = {
      citizenCardNumber: this.selectItem.dftCitizenId,
      fullName: this.selectItem.dftAttorneyGivenName + ' ' + this.selectItem.dftAttorneySurName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem('rlpd-crime-defendant-compensation'));
    this.htmlReport = this.ReportRlpdCrimeDefendantCompensation.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    this.reportName = '/ReportRlpdCrimeDefendantCompensation';
    localStorage.setItem('rlpd-crime-defendant-compensation', JSON.stringify(this.selectItem));
  }

  onCrimeDefendantCompensationSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentCrimeDefendantCompensationDialog, {
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
  selector: 'dialog-content-crime-defendant-compensation-dialog',
  templateUrl: 'dialog-content-crime-defendant-compensation-dialog.html',
})
export class DialogContentCrimeDefendantCompensationDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentCrimeDefendantCompensationDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#crime-defendant-compensation-full-width-modal").modal("show");
    });

  }
}
