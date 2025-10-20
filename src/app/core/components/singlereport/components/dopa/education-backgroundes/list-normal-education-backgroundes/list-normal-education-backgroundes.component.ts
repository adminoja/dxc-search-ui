import { Dxc_Model_Moi_Dopa_Education_Backgroundes } from './../../../../../../shared/models/Dxc_Model_Dopa_Moi_Education_Backgroundes';
import { DopaMoiEducationBackgroundesMetadata } from './../../../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-education-backgroundes/dxc-model-dopa-moi-education-backgroundes.interface';
import { Component, OnInit } from '@angular/core';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';

@Component({
  selector: 'app-list-normal-education-backgroundes',
  templateUrl: './list-normal-education-backgroundes.component.html',
  styleUrls: ['./list-normal-education-backgroundes.component.scss'],
  providers: [
    DopaMoiEducationBackgroundesMetadata
  ]
})
export class ListNormalEducationBackgroundesComponent implements OnInit {
  MoiDopaEducationBackgroundesResults: Dxc_Model_Moi_Dopa_Education_Backgroundes[];
  MoiDopaEducationBackgroundesCount: number;

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

  constructor(private ReportDopaMoiEducationBackgroundes: DopaMoiEducationBackgroundesMetadata) {
  }

  ngOnInit() {
    this.ReportDopaMoiEducationBackgroundes.getSearchData();
    this.MoiDopaEducationBackgroundesResults = this.ReportDopaMoiEducationBackgroundes.$results;
    this.MoiDopaEducationBackgroundesCount = this.ReportDopaMoiEducationBackgroundes.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    if (title === 'ข้อมูลวุฒิการศึกษา (2556) สำนักปลัดกระทรวงศึกษาธิการ(Linkage)') {
      // filter DateOfBirth และ filter Sex
      console.log('1');
      const dopamoithaiidcard = new Dxc_Model_Moi_Dopa_Education_Backgroundes(Item);
      const dataSet = dopamoithaiidcard.getData();
      localStorage.setItem('dopa-moi-dopa-education-backgrounds', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('dopa-moi-dopa-education-backgrounds'));
      // แสดง ข้อมูลเบื้องต้น ข้อมูลวุฒิการศึกษา (2556) สำนักปลัดกระทรวงศึกษาธิการ(Linkage)
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.degree1 + ' ' + this.selectItem.degree1,
        sex: this.selectItem.degree1,
        dateOfBirth: this.selectItem.degree1
      };
      this.departmentImg = departmentImg;
      console.log(this.selectItem);
    } else {

    }
    if (title === 'ข้อมูลวุฒิการศึกษา (2556) สำนักปลัดกระทรวงศึกษาธิการ(Linkage)') {
      console.log('2');

      this.selectData = JSON.parse(localStorage.getItem('dopa-moi-dopa-education-backgrounds'));
      this.htmlReport = this.ReportDopaMoiEducationBackgroundes.getHtml(this.selectItem, title);
      this.viewhtmlReport = this.ReportDopaMoiEducationBackgroundes.viewgetHtml(this.selectItem, title);
    } else {
    }
  }

  pdfPreviewlocal() {
    if (this.title === 'ข้อมูลวุฒิการศึกษา (2556) สำนักปลัดกระทรวงศึกษาธิการ(Linkage)') {
      console.log(this.title);
      this.reportName = '/ReportDopaEducationBackgroundes';
      localStorage.setItem('dopa-moi-dopa-education-backgrounds', JSON.stringify(this.selectItem));
    } else {

    }
  }
}
