import { Component, OnInit } from '@angular/core';
import { DcaMoiThailanfPassportMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dca-moi-thailand-passport/dxc-model-dca-moi-thailand-passport.interface';
import { IDxc_Model_Dca_Moi_Thailand_Passport } from 'src/app/core/shared/models/Dxc_Model_Dca_Moi_Thailand_Passport';

@Component({
  selector: 'app-list-left-thailand-passport',
  templateUrl: './list-left-thailand-passport.component.html',
  styleUrls: ['./list-left-thailand-passport.component.scss']
})
export class ListLeftThailandPassportComponent implements OnInit {

  thailandPassportResults: IDxc_Model_Dca_Moi_Thailand_Passport[];
  checkThailandPassportResults: boolean;
  constructor(private ReportMoiMfaThailandPassport: DcaMoiThailanfPassportMetadata) { }

  ngOnInit() {

    this.ReportMoiMfaThailandPassport.getSearchData();
    this.thailandPassportResults = this.ReportMoiMfaThailandPassport.$results;
    console.log('this.thailandPassporResults');
    console.log(this.thailandPassportResults);

    if (this.thailandPassportResults.length !== 0) {
      this.checkThailandPassportResults = true;
    } else {
      this.checkThailandPassportResults = false;
    }

  }

}
