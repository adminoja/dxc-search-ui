import { Component, Inject, OnInit } from '@angular/core';
import { Dxc_Model_Dopa_Moi_Aliens, IDxc_Model_Dopa_Moi_Aliens } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Aliens';
import { DopaMoiAliensMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-aliens/dxc-model-dopa-moi-aliens.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { environment } from 'src/environments/environment';

declare var $;
@Component({
  selector: 'app-list-normal-aliens',
  templateUrl: './list-normal-aliens.component.html',
  styleUrls: ['./list-normal-aliens.component.scss'],
  providers: [DopaMoiAliensMetadata]
})
export class ListNormalAliensComponent implements OnInit {

  aliensResults: IDxc_Model_Dopa_Moi_Aliens[];
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
  alienCount: number;
  report_name: string;
  constructor(private ReportDopaMoiAliens: DopaMoiAliensMetadata , public dialog: MatDialog) { }

  ngOnInit() {
    this.ReportDopaMoiAliens.getSearchData();
    this.aliensResults = this.ReportDopaMoiAliens.$results;
    this.alienCount = this.ReportDopaMoiAliens.$count;
    this.report_name = localStorage.getItem('report_name');
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['dopa'].sub[0]['aliens'].img;
    this.departmentTitle = environment.qm.sub[0]['dopa'].title;

    if (title === 'ข้อมูลทะเบียนบุคคลต่างด้าว (Linkage)') {
      console.log('pass');
      const DopaMoiAliens = new Dxc_Model_Dopa_Moi_Aliens(Item);
      DopaMoiAliens.setData(Item);
      const dataSet = DopaMoiAliens.getData();
      localStorage.setItem('dopa-moi-dopa-alien', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('dopa-moi-dopa-alien'));
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: this.selectItem.genderDesc,
        dateOfBirth: this.selectItem.dateOfBirth
      };
      this.departmentImg = departmentImg;
      console.log(this.selectItem);
    } else {
    }
    title = 'ข้อมูลทะเบียนบุคคลต่างด้าว (Linkage)';
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem('dopa-moi-dopa-alien'));
    this.htmlReport = this.ReportDopaMoiAliens.getHtml(this.selectItem, title);
    this.openDialog(this.selectData);
  }
  pdfPreviewlocal() {
    this.title = 'ข้อมูลทะเบียนบุคคลต่างด้าว (Linkage)';
    this.reportName = '/ReportDopaMoiAliens';
    localStorage.setItem('dopa-moi-dopa-alien', JSON.stringify(this.selectItem));
  }

    //เปิด Modal
    openDialog(arrData) {
      // $("#full-width-modal").modal();
      this.selectRowModal(arrData);
      const dialogRef = this.dialog.open(DialogContentAlienDialog, {
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
  selector: 'dialog-content-alien-dialog',
  templateUrl: 'dialog-content-alien-dialog.html',
})
export class DialogContentAlienDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentAlienDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#alien-full-width-modal").modal("show");
    });

  }
}

