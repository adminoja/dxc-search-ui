import { Component, OnInit } from '@angular/core';
import { DopaMoiDeathCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-death-certificates/dxc-model-dopa-moi-death-certificates.interface';
import { Dxc_Model_Dopa_Moi_Death_Certificates, IDxc_Model_Dopa_Moi_Death_Certificates } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Death_Certificates';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-normal-death-certificates',
  templateUrl: './list-normal-death-certificates.component.html',
  styleUrls: ['./list-normal-death-certificates.component.scss']
})
export class ListNormalDeathCertificatesComponent implements OnInit {
  moidopaDeathCertificatesResults: IDxc_Model_Dopa_Moi_Death_Certificates[];
  moidopaDeathCertificatesShow: boolean;
  moidopaDeathCertificatesCount: number;
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
  constructor(private ReportDopaMoiDeathCertificates: DopaMoiDeathCertificatesMetadata) { }

  ngOnInit() {
    this.ReportDopaMoiDeathCertificates.getSearchData();
    this.moidopaDeathCertificatesResults = this.ReportDopaMoiDeathCertificates.$results;
    this.moidopaDeathCertificatesShow = this.ReportDopaMoiDeathCertificates.$show;
    this.moidopaDeathCertificatesCount = this.ReportDopaMoiDeathCertificates.$count;
  }

  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;

      const moiDopaAddresses = new Dxc_Model_Dopa_Moi_Death_Certificates(Item);
      const dataSet = moiDopaAddresses.getData();
      const schema = environment.qm.sub[0]['dopa'].sub[0]['deathcertificates'].schema;
      localStorage.setItem('dopa-moi-dopa-death-certificates', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem(schema));
      // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: this.selectItem.sex,
        dateOfBirth: this.selectItem.birthDate
      };
      this.departmentImg = departmentImg;
      this.selectData = JSON.parse(localStorage.getItem(schema));
      this.htmlReport = this.ReportDopaMoiDeathCertificates.getHtml(this.selectItem, title);
      this.viewhtmlReport = this.ReportDopaMoiDeathCertificates.viewgetHtml(this.selectItem, title);
  }

  pdfPreviewlocal() {
      this.reportName = '/ReportDopaMoiDeathCertificates';
      localStorage.setItem('dopa-moi-dopa-death-certificates', JSON.stringify(this.selectItem));
  }

}
