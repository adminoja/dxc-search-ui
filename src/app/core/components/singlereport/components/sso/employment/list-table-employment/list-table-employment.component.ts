import { Component, OnInit } from '@angular/core';
import { SsoEmploymentMetaData } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-sso-employment/dxc-model-sso-employment.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { Dxc_Model_Sso_Employment, IDxc_Model_Sso_Employment } from 'src/app/core/shared/models/Dxc_Model_Sso_Employment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-table-employment',
  templateUrl: './list-table-employment.component.html',
  styleUrls: ['./list-table-employment.component.scss']
})
export class ListTableEmploymentComponent implements OnInit {
  ssoEmploymentResults: IDxc_Model_Sso_Employment[];
  ssoEmploymentShow: boolean;
  ssoEmploymentCount: number;
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

  constructor(private ReportSsoEmployment: SsoEmploymentMetaData) { }

  ngOnInit() {
    this.ReportSsoEmployment.getSearchData();
    this.ssoEmploymentResults = this.ReportSsoEmployment.$results;
    this.ssoEmploymentShow = this.ReportSsoEmployment.$show;
    this.ssoEmploymentCount = this.ReportSsoEmployment.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    this.img = environment.qm.sub[0]['sso'].sub[0]['employment'].img;
    this.departmentTitle = environment.qm.sub[0]['sso'].title;

    const ssoEmploymen = new Dxc_Model_Sso_Employment(Item);
    ssoEmploymen.setData(Item);
    const dataSet = ssoEmploymen.getData();
    console.log(dataSet);
    const schema = environment.qm.sub[0]['sso'].sub[0]['employment'].schema;
    localStorage.setItem('sso-employment', JSON.stringify(dataSet));
    this.selectItem = JSON.parse(localStorage.getItem(schema));
    // แสดง ข้อมูลเบื้องต้น
    this.person = {
      citizenCardNumber: this.selectItem.ssoNum,
      fullName: '-',
      sex: '-',
      dateOfBirth: '-'
    };
    this.departmentImg = departmentImg;
    this.selectData = JSON.parse(localStorage.getItem(schema));
    this.htmlReport = this.ReportSsoEmployment.getHtml(this.selectItem, title);
  }

  pdfPreviewlocal() {
    this.reportName = '/ReportSsoEmployment';
    localStorage.setItem('sso-employment', JSON.stringify(this.selectItem));
  }

}
