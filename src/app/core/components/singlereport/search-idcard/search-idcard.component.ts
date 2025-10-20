import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dxc_Model_SearchFillter } from 'src/app/core/shared/models/Dxc_Model_SearchFillter';

@Component({
  selector: 'app-search-idcard',
  templateUrl: './search-idcard.component.html',
  styleUrls: ['./search-idcard.component.scss']
})
export class SearchIdcardComponent implements OnInit {

  // ข้อมูลที่ต้องการฟิลเตอร์มี เลขที่บัตรปชช., ชื่อ - นามสกุล, เลขทะเบียนรถ - จังหวัด
  citizenCardNumber: string;
  firstName: string;
  lastName: string;
  prisoner: string;
  casename: string;
  report_name: string;
  dataSetId: string;
  constructor(private router: Router) {
    this.citizenCardNumber = '';
    this.firstName = '';
    this.lastName = '';
    this.prisoner = '';
    this.casename = '';
  }

  ngOnInit() {
  }
  btnSearch_Click() {
    const dataSearch = new Dxc_Model_SearchFillter(this.citizenCardNumber, this.firstName, this.lastName, '', this.prisoner, this.casename, this.dataSetId);
    // this.router.navigate(['singlereport/reportcoj/',
    //   this.report_name,
    //   dataSearch.citizenCardNumber,
    //   this.firstName, this.lastName,
    //   this.prisoner, this.casename]
    // );
    this.router.navigateByUrl('singlereport/loaddata1/กรมคุมประพฤติ');
  }
}
