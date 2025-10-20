import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DopaMoiThaiidcardMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-thaiidcard/dxc-model-dopa-moi-thaiidcard.interface';
import { Dxc_Model_Moi_Dopa_ThaiIdcard } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Thaiidcard';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-table-thaiidcard',
  templateUrl: './list-table-thaiidcard.component.html',
  styleUrls: ['./list-table-thaiidcard.component.scss'],
  providers: [
    DopaMoiThaiidcardMetadata
  ]
})
export class ListTableThaiidcardComponent implements OnInit {

  MoiDopaThaiIdcardResults: Dxc_Model_Moi_Dopa_ThaiIdcard[];
  MoiDopaThaiIdcardTableCount: number;

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

  constructor(private ReportDopaMoiThaiidcard: DopaMoiThaiidcardMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportDopaMoiThaiidcard.getSearchData();
    this.MoiDopaThaiIdcardResults = this.ReportDopaMoiThaiidcard.$results;
    this.MoiDopaThaiIdcardTableCount = this.ReportDopaMoiThaiidcard.$count;
    this.report_name = localStorage.getItem('report_name');
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dopa'].sub[0]['thaiidcard'].img;
    this.departmentTitle = environment.qm.sub[0]['dopa'].title;

    if (title === 'บัตรประจำตัวประชาชน (Linkage)') {
      // filter DateOfBirth และ filter Sex
      console.log('1');
      const dopamoithaiidcard = new Dxc_Model_Moi_Dopa_ThaiIdcard(Item);
      dopamoithaiidcard.setData(Item);
      const dataSet = dopamoithaiidcard.getData();
      localStorage.setItem('dopa-moi-dopa-thai-id-cards', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('dopa-moi-dopa-thai-id-cards'));
      // แสดง ข้อมูลเบื้องต้น บัตรประจำตัวประชาชน (Linkage)
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.nameTHFirstName + ' ' + this.selectItem.nameTHLastName,
        sex: this.selectItem.sex,
        dateOfBirth: this.selectItem.birthDate
      };
      this.departmentImg = departmentImg;
    } else {

    }
    if (title === 'บัตรประจำตัวประชาชน (Linkage)') {
      this.selectData = JSON.parse(localStorage.getItem('dopa-moi-dopa-thai-id-cards'));
      this.htmlReport = this.ReportDopaMoiThaiidcard.getHtml(this.selectItem, title);
      this.openDialog(this.selectData);
    } else {
    }
  }

  pdfPreviewlocal() {
    if (this.title === 'บัตรประจำตัวประชาชน (Linkage)') {
      console.log(this.title);
      this.reportName = '/ReportDopaMoiThaiidcard';
      localStorage.setItem('dopa-moi-dopa-thai-id-cards', JSON.stringify(this.selectItem));
    } else {

    }
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentThaiIdcardTableDialog, {
      data: {
        title: this.title, // dbname
        img: this.img,
        departmentImg: this.departmentImg,
        departmentTitle: this.departmentTitle,
        reportName: this.reportName,
        selectData: this.selectData,
        viewhtmlReport: this.viewhtmlReport,
        person: this.person
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
  selector: 'dialog-content-thai-id-cards-table-dialog',
  templateUrl: 'dialog-content-thai-id-cards-table-dialog.html',
})
export class DialogContentThaiIdcardTableDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentThaiIdcardTableDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#thai-id-cards-table-full-width-modal").modal("show");
    });

  }
}

