import { Dxc_Model_Moi_Moe_Students } from '../../../../../../shared/models/Dxc_Model_Moe_Moi_Students';
import { Component, OnInit } from '@angular/core';
import { MoeMoiStudentsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-moe-moi-students/dxc-model-moe-moi-students.interface';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';

@Component({
  selector: 'app-list-normal-students',
  templateUrl: './list-normal-students.component.html',
  styleUrls: ['./list-normal-students.component.scss'],
  providers: [
    MoeMoiStudentsMetadata
  ]
})
export class ListNormalStudentsComponent implements OnInit {
  MoiDopaStudentsResults: Dxc_Model_Moi_Moe_Students[];
  MoiDopaStudentsCount: number;

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

  constructor(private ReportDopaMoiStudents: MoeMoiStudentsMetadata) {
  }

  ngOnInit() {
    this.ReportDopaMoiStudents.getSearchData();
    this.MoiDopaStudentsResults = this.ReportDopaMoiStudents.$results;
    this.MoiDopaStudentsCount = this.ReportDopaMoiStudents.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    if (title === 'ข้อมูลนักเรียน-นักศึกษา กระทรวงศึกษาธิการ(Linkage)') {
      // filter DateOfBirth และ filter Sex
      console.log('1');
      const dopamoithaiidcard = new Dxc_Model_Moi_Moe_Students(Item);
      const dataSet = dopamoithaiidcard.getData();
      localStorage.setItem('moe-moi-moe-students', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('moe-moi-moe-students'));
      // แสดง ข้อมูลเบื้องต้น ข้อมูลนักเรียน-นักศึกษา กระทรวงศึกษาธิการ(Linkage)
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.name + ' ' + this.selectItem.name,
        sex: this.selectItem.name,
        dateOfBirth: this.selectItem.name
      };
      this.departmentImg = departmentImg;
      console.log(this.selectItem);
    } else {

    }
    if (title === 'ข้อมูลนักเรียน-นักศึกษา กระทรวงศึกษาธิการ(Linkage)') {
      console.log('2');

      this.selectData = JSON.parse(localStorage.getItem('moe-moi-moe-students'));
      this.htmlReport = this.ReportDopaMoiStudents.getHtml(this.selectItem, title);
      this.viewhtmlReport = this.ReportDopaMoiStudents.viewgetHtml(this.selectItem, title);
    } else {
    }
  }

  pdfPreviewlocal() {
    if (this.title === 'ข้อมูลนักเรียน-นักศึกษา กระทรวงศึกษาธิการ(Linkage)') {
      console.log(this.title);
      this.reportName = '/ReportMoeStudents';
      localStorage.setItem('moe-moi-moe-students', JSON.stringify(this.selectItem));
    } else {

    }
  }
}