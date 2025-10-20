import { Dxc_Model_Person } from '../../../../../../shared/models/Dxc_Model_Person';
import { DopProbationerMetadata } from '../../../../../localsearch/qmreporttemplate/dxc-model-dop-probationer/dxc-model-dop-probationer.interface';
import { IDxc_Model_Dop_Probationer, Dxc_Model_Dop_Probationer } from '../../../../../../shared/models/Dxc_Model_Dop_Probationer';
import { Component, OnInit, Inject, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-algations-probations',
  templateUrl: './list-algations-probations.component.html',
  styleUrls: ['./list-algations-probations.component.scss']
})
export class ListAlgationsProbationsComponent implements OnInit, OnChanges {
  @Input() inputAlgationsProbationer: IDxc_Model_Dop_Probationer;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>();
  probationerResults: IDxc_Model_Dop_Probationer[];
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
  probationerCount: number;
  report_name: string;
  exitCode:any;
  constructor(private ReportDopProbationer: DopProbationerMetadata, public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.inputAlgationsProbationer !== undefined) {
      const schema = 'dop-probationee';
      localStorage.setItem(schema + 'Results', JSON.stringify(this.inputAlgationsProbationer));
      this.ReportDopProbationer.getSearchData();
      this.probationerResults = this.ReportDopProbationer.$results;
      this.probationerCount = this.ReportDopProbationer.$count;
    } else {
      const schema = 'dop-probationee';
      localStorage.setItem(schema + 'Results', JSON.stringify([]));
      this.ReportDopProbationer.getSearchData();
      this.probationerResults = this.ReportDopProbationer.$results;
      this.probationerCount = this.ReportDopProbationer.$count;
    }

  }

  ngOnInit() {
    this.ReportDopProbationer.getSearchData();
    this.probationerResults = this.ReportDopProbationer.$results;
    this.probationerCount = this.ReportDopProbationer.$count;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.probationerResults
    // console.log(this.exitCode[0])
    // this.probationerResults.sort(function (a, b) {
    // return a.probationStartDate.localeCompare(b.probationStartDate);
    // });
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dop'].sub[0]['probationer'].img;
    this.departmentTitle = environment.qm.sub[0]['dop'].title;

    const dopprobationer = new Dxc_Model_Dop_Probationer(Item);
    dopprobationer.setData(Item);
    const dataSet = dopprobationer.getData();
    localStorage.setItem('dop-probationee', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('dop-probationee'));
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;

    this.selectData = JSON.parse(localStorage.getItem('dop-probationee'));
    this.htmlReport = this.ReportDopProbationer.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {

    this.reportName = '/ReportDopProbationer';
    localStorage.setItem('dop-probationee', JSON.stringify(this.selectItem));
    console.log(this.selectItem);

  }

  onProbationerSelect() {
    this.outputCitizencardNumber.emit(undefined);
  }


  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(AlgationsProbationsDialog, {
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
  selector: 'algations-probations-dialog',
  templateUrl: 'algations-probations-dialog.html',
})
export class AlgationsProbationsDialog {
  constructor(public dialogRef: MatDialogRef<AlgationsProbationsDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#probations-full-width-modal").modal("show");
    });

  }
}
