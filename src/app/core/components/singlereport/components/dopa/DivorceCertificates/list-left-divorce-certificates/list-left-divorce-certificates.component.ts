import { Component, OnInit } from '@angular/core';
import { DopaMoiDivorceCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-divorce-certificates/dxc-model-dopa-moi-divorce-certificates.interface';
import { Dxc_Model_Dopa_Moi_Divorce_Certificates } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Divorce_Certificates';

@Component({
  selector: 'app-list-left-divorce-certificates',
  templateUrl: './list-left-divorce-certificates.component.html',
  styleUrls: ['./list-left-divorce-certificates.component.scss']
})
export class ListLeftDivorceCertificatesComponent implements OnInit {
  moidopaDivorceCertificatesResults: Dxc_Model_Dopa_Moi_Divorce_Certificates[];
  checkMoidopaDivorceCertificatesResults: boolean;
  constructor(private ReportDopaMoiDivorceCertificates: DopaMoiDivorceCertificatesMetadata) { }

  ngOnInit() {

    this.ReportDopaMoiDivorceCertificates.getSearchData();
    this.moidopaDivorceCertificatesResults = this.ReportDopaMoiDivorceCertificates.$results;
    
    if(this.moidopaDivorceCertificatesResults.length !== 0 ){
      this.checkMoidopaDivorceCertificatesResults = true;
    } else {
      this.checkMoidopaDivorceCertificatesResults = false;
    }
  }

}
