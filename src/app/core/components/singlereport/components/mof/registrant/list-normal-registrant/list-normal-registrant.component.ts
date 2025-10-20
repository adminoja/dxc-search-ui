import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MofRegistrantMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-mof-registrant/dxc-model-mof-registrant.interface';
import { Dxc_Model_Mof_Registrant, IDxc_Model_Mof_Registrant } from 'src/app/core/shared/models/Dxc_Model_Mof_Registrant';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-registrant',
  templateUrl: './list-normal-registrant.component.html',
  styleUrls: ['./list-normal-registrant.component.scss']
})
export class ListNormalRegistrantComponent implements OnInit, OnChanges {
  @Input() inputNormalRegistrant: IDxc_Model_Mof_Registrant;
  @Input() inputCitizencardNumber: string;
  @Output() outputCitizencardNumber = new EventEmitter<string>()
  mofRegistrantResults: IDxc_Model_Mof_Registrant[];
  mofRegistrantShow: boolean;
  mofRegistrantCount: number;
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
  constructor(private ReportMofRegistrant: MofRegistrantMetadata, public dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
    const schema = 'mof-registrant';
    localStorage.setItem(schema + 'Results', JSON.stringify(this.inputNormalRegistrant))
    this.ReportMofRegistrant.getSearchData();
    this.mofRegistrantResults = this.ReportMofRegistrant.$results;
    this.mofRegistrantCount = this.ReportMofRegistrant.$count;
  }

  ngOnInit() {
    this.ReportMofRegistrant.getSearchData();
    this.mofRegistrantResults = this.ReportMofRegistrant.$results;
    this.mofRegistrantShow = this.ReportMofRegistrant.$show;
    this.mofRegistrantCount = this.ReportMofRegistrant.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['mof'].sub[0]['registrant'].img;
    this.departmentTitle = environment.qm.sub[0]['mof'].title;

    const registrant = new Dxc_Model_Mof_Registrant(Item);
    registrant.setData(Item);
    const dataSet = registrant.getData();
    const schema = environment.qm.sub[0]['mof'].sub[0]['registrant'].schema;
    localStorage.setItem('mof-registrant', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem(schema));
    console.log(this.selectItem)
    // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.sex,
      dateOfBirth: this.selectItem.birthDate
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem(schema));
    this.htmlReport = this.ReportMofRegistrant.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportMofRegistrant';
    localStorage.setItem('mof-registrant', JSON.stringify(this.selectItem));
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentRegistrantDialog, {
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
  selector: 'dialog-content-registrant-dialog',
  templateUrl: 'dialog-content-registrant-dialog.html',
})
export class DialogContentRegistrantDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentRegistrantDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#registrant-full-width-modal").modal("show");
    });

  }
}
