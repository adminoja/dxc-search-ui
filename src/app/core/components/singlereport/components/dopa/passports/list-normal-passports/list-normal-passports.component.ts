import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Moi_Dopa_Passports, Dxc_Model_Moi_Dopa_Passports } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Passports';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { DopaMoiPassportsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-passports/dxc-model-dopa-moi-passports.interface';

@Component({
  selector: 'app-list-normal-passports',
  templateUrl: './list-normal-passports.component.html',
  styleUrls: ['./list-normal-passports.component.scss'],
  providers:[
    DopaMoiPassportsMetadata
  ]
})
export class ListNormalPassportsComponent implements OnInit {
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
  moiDopaPassportsCount: number;
  moiDopaPassportsResults: IDxc_Model_Moi_Dopa_Passports[];
  constructor(private ReportMoiDopaPassports: DopaMoiPassportsMetadata) { }
  ngOnInit() {
    this.ReportMoiDopaPassports.getSearchData();
    this.moiDopaPassportsResults = this.ReportMoiDopaPassports.$results;
    this.moiDopaPassportsCount = this.ReportMoiDopaPassports.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    if (title === 'รายการประวัติหนังสือเดินทาง (Linkage)') {
      console.log('pass');
      const moiDopaPassportsResults = new Dxc_Model_Moi_Dopa_Passports(Item);
      const dataSet = moiDopaPassportsResults.getData();
      localStorage.setItem('dopa-moi-dopa-passports', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('dopa-moi-dopa-passports'));
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstNameTh + this.selectItem.lastNameTh,
        sex: this.selectItem.sex,
        dateOfBirth : ''
      };
      this.departmentImg = departmentImg;
      console.log(this.selectItem);
    } else {
    }
    title = 'รายการประวัติหนังสือเดินทาง (Linkage)';
    this.selectData = JSON.parse(localStorage.getItem('dopa-moi-dopa-passports'));
    this.htmlReport = this.ReportMoiDopaPassports.getHtml(this.selectItem, title);
    this.viewhtmlReport = this.ReportMoiDopaPassports.viewgetHtml(this.selectItem, title);
  }
  pdfPreviewlocal() {
    this.title = 'รายการประวัติหนังสือเดินทาง (Linkage)';
    this.reportName = '/ReportMoiDopaPassports';
    localStorage.setItem('dopa-moi-dopa-passports', JSON.stringify(this.selectItem));
  }
}
