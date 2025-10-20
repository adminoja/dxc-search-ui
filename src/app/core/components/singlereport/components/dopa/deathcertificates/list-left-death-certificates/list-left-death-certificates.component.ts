import { Component, OnInit } from '@angular/core';
import { DopaMoiDeathCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-death-certificates/dxc-model-dopa-moi-death-certificates.interface';
import { IDxc_Model_Dopa_Moi_Death_Certificates } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Death_Certificates';

@Component({
  selector: 'app-list-left-death-certificates',
  templateUrl: './list-left-death-certificates.component.html',
  styleUrls: ['./list-left-death-certificates.component.scss']
})
export class ListLeftDeathCertificatesComponent implements OnInit {
  moidopaDeathCertificatesResults: IDxc_Model_Dopa_Moi_Death_Certificates[];
  checkMoidopaDeathCertificatesResults: boolean;
  constructor(private ReportDopaMoiDeathCertificates: DopaMoiDeathCertificatesMetadata) { }

  ngOnInit() {

    this.ReportDopaMoiDeathCertificates.getSearchData();
    this.moidopaDeathCertificatesResults = this.ReportDopaMoiDeathCertificates.$results;
    
    if(this.moidopaDeathCertificatesResults.length !== 0 ){
      this.checkMoidopaDeathCertificatesResults = true;
    } else {
      this.checkMoidopaDeathCertificatesResults = false;
    }
  }

}
