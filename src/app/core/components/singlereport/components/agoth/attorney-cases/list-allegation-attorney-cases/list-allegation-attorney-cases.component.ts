import { Component, OnInit } from '@angular/core';
import { AgothAttorneyCasesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-agoth-attorney-cases/dxc-model-agoth-attorney-cases.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { Dxc_Model_Agoth_AttorneyMainCases, IDxc_Model_Agoth_AttorneyMainCases } from 'src/app/core/shared/models/Dxc_Model_Agoth_AttorneyMainCases';

@Component({
  selector: 'app-list-allegation-attorney-cases',
  templateUrl: './list-allegation-attorney-cases.component.html',
  styleUrls: ['./list-allegation-attorney-cases.component.scss'],
  providers: [AgothAttorneyCasesMetadata]
})
export class ListAllegationAttorneyCasesComponent implements OnInit {
  attorneyCasesResults: IDxc_Model_Agoth_AttorneyMainCases[];
  attorneyCasesCount: number;
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

  constructor(private ReportAgothAttorneyCases: AgothAttorneyCasesMetadata) { }

  ngOnInit() {
    this.ReportAgothAttorneyCases.getSearchData();
    this.attorneyCasesResults = this.ReportAgothAttorneyCases.$results;
    this.attorneyCasesCount = this.ReportAgothAttorneyCases.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    console.log(Item + ' ' + title + ' ' + departmentImg);

    this.title = title;
    if (title === 'สำนวนคดี') {
      // filter DateOfBirth และ filter Sex
      console.log('pass');
      const agothAttorneyCases = new Dxc_Model_Agoth_AttorneyMainCases(Item);
      const dataSet = agothAttorneyCases.getData();
      // localStorage.setItem(key, value) คือ การเก็บข้อมูลลงใน Local Storage
      localStorage.setItem('agoth-attorney-cases', JSON.stringify(dataSet));
      // localStorage.getItem(key) คือ การเรียกใช้ข้อมูล key ของ Local Storage
      this.selectItem = JSON.parse(localStorage.getItem('agoth-attorney-cases'));
      // แสดง ข้อมูลเบื้องต้น สำนวนคดี
      this.person = {
        citizenCardNumber: this.selectItem.accusedCitizenIds,
        fullName: this.selectItem.accusedsText,
        sex: this.selectItem.accusedGenderName,
        dateOfBirth: null
      };
      this.departmentImg = departmentImg;
      console.log(this.selectItem);
    } else {

    }
    if (title === 'สำนวนคดี') {
      this.selectData = JSON.parse(localStorage.getItem('agoth-attorney-cases'));
      this.htmlReport = this.ReportAgothAttorneyCases.getHtml(this.selectItem, title);
      this.viewhtmlReport = this.ReportAgothAttorneyCases.viewgetHtml(this.selectItem, title);
    } else {
    }
  }

  pdfPreviewlocal() {
    if (this.title === 'สำนวนคดี') {
      this.reportName = '/ReportAgothAttorneyCases';
      localStorage.setItem('agoth-attorney-cases', JSON.stringify(this.selectItem));
    } else {

    }
  }
}
