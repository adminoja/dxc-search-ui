import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DopaMoiPersonChangelastnameMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-dopa-person-changelastname/dxc-model-dopa-moi-dopa-person-changelastname.interface';
import { Dxc_Model_Dopa_MoiDopaPersonChangelastname, IDxc_Model_Dopa_MoiDopaPersonChangelastname } from 'src/app/core/shared/models/Dxc_Model_Dopa_MoiDopaPersonChangelastname';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-table-person-changelastname',
  templateUrl: './list-table-person-changelastname.component.html',
  styleUrls: ['./list-table-person-changelastname.component.scss']
})
export class ListTablePersonChangelastnameComponent implements OnInit {

  moiDopaPersonChangelastnameResults: IDxc_Model_Dopa_MoiDopaPersonChangelastname[];
  moiDopaPersonChangelastnameShow: boolean;
  moiDopaPersonChangelastnameCount: number;
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
  constructor(private ReportMoiDopaPersonChangelastname: DopaMoiPersonChangelastnameMetadata, public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportMoiDopaPersonChangelastname.getSearchData();
    this.moiDopaPersonChangelastnameResults = this.ReportMoiDopaPersonChangelastname.$results;
    this.moiDopaPersonChangelastnameShow = this.ReportMoiDopaPersonChangelastname.$show;
    this.moiDopaPersonChangelastnameCount = this.ReportMoiDopaPersonChangelastname.$count;
    this.report_name = localStorage.getItem('report_name');
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dopa'].sub[0]['changelastnameprimary'].img;
    this.departmentTitle = environment.qm.sub[0]['dopa'].title;

    const moiDopaPersonChangelastname = new Dxc_Model_Dopa_MoiDopaPersonChangelastname(Item);
    moiDopaPersonChangelastname.setData(Item);
    const dataSet = moiDopaPersonChangelastname.getData();
    const schema = environment.qm.sub[0]['dopa'].sub[0]['changelastnameprimary'].schema;
    sessionStorage.setItem('dopa-moi-dopa-person-changelastname', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(sessionStorage.getItem(schema));
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
      sex: this.selectItem.genderDesc,
      dateOfBirth: this.selectItem.dateOfBirth
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(sessionStorage.getItem(schema));
    this.htmlReport = this.ReportMoiDopaPersonChangelastname.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportMoiDopaPersonChangelastname';
    sessionStorage.setItem('dopa-moi-dopa-person-changelastname', JSON.stringify(this.selectItem));
  }

  // เปิด Modal
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    this.selectRowModal(arrData);
    const dialogRef = this.dialog.open(DialogContentChangelastnameTableDialog, {
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

  close() {
    $(document).ready(function () {
      $("#DoppaMoiDopaPersonChangelastname").modal('toggle');
    });
  }

}


@Component({
  selector: 'dialog-content-changelastname-table-dialog',
  templateUrl: 'dialog-content-changelastname-table-dialog.html',
})
export class DialogContentChangelastnameTableDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentChangelastnameTableDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#changelastname-table-full-width-modal").modal("show");
    });

  }
}

