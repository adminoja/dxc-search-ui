import { Component, OnInit } from '@angular/core';
import { DoeMoiAlienWorkforcesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doe-moi-alien-workforces/dxc-model-doe-moi-alien-workforces.interface';
import { Dxc_Model_Doe_Moi_Alien_Workforces, IDxc_Model_Doe_Moi_Alien_Workforces } from 'src/app/core/shared/models/Dxc_Model_Doe_Moi_Alien_Workforces';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';

@Component({
  selector: 'app-list-normal-alien-workforces',
  templateUrl: './list-normal-alien-workforces.component.html',
  styleUrls: ['./list-normal-alien-workforces.component.scss'],
  providers: [DoeMoiAlienWorkforcesMetadata]
})
export class ListNormalAlienWorkforcesComponent implements OnInit {
  alienWorkforcesResults: IDxc_Model_Doe_Moi_Alien_Workforces[];
  alienWorkforcesCount: number;
  title: string; // ชื่อหน่วยงานย่อย
  selectItem: any;
  person: Dxc_Model_Person;
  departmentImg: string; // รูปภาพหน่วยงานหลัก
  selectData: number = null;
  htmlReport: any;
  viewhtmlReport: any;
  reportName: string;

  constructor(private ReportReportDoeMoiAlienWorkforces: DoeMoiAlienWorkforcesMetadata) { }

  ngOnInit() {
    this.ReportReportDoeMoiAlienWorkforces.getSearchData();
    this.alienWorkforcesResults = this.ReportReportDoeMoiAlienWorkforces.$results;
    this.alienWorkforcesCount = this.ReportReportDoeMoiAlienWorkforces.$count;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    const alienworkforces = new Dxc_Model_Doe_Moi_Alien_Workforces(Item);
    const dataSet = alienworkforces.getData();
    localStorage.setItem('doe-moi-doe-alien-workforces', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem('doe-moi-doe-alien-workforces'));
    // แสดง ข้อมูลเบื้องต้น
    this.person = {
      citizenCardNumber: this.selectItem.citizenCardNumber,
      fullName: this.selectItem.alienFullNmaeTh,
      sex: this.selectItem.alienSex,
      dateOfBirth: this.selectItem.alienBirthDate

    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem('doe-moi-doe-alien-workforces'));
    this.htmlReport = this.ReportReportDoeMoiAlienWorkforces.getHtml(this.selectItem, title);
    this.viewhtmlReport = this.ReportReportDoeMoiAlienWorkforces.viewgetHtml(this.selectItem, title);
 }
 pdfPreviewlocal() {
  this.reportName = '/ReportReportDoeMoiAlienWorkforces';
  localStorage.setItem('doe-moi-doe-alien-workforces', JSON.stringify(this.selectItem));
  console.log(this.selectItem);
}
}
