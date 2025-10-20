import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dopa_Moi_Birth_Certificates } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Birth_Certificates';
import { DopaMoiBirthCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-birthcertificates/dxc-model-dopa-moi-birthcertificates.interface';

@Component({
  selector: 'app-list-left-birthcertificates',
  templateUrl: './list-left-birthcertificates.component.html',
  styleUrls: ['./list-left-birthcertificates.component.scss']
})
export class ListLeftBirthcertificatesComponent implements OnInit {

  moiDopaBirthcertificatesResults: IDxc_Model_Dopa_Moi_Birth_Certificates[];
  checkmoiDopaBirthcertificatesResults: boolean;
  constructor(private Reportbirthcertificates: DopaMoiBirthCertificatesMetadata) { }

  ngOnInit() {
    this.Reportbirthcertificates.getSearchData();
    this.moiDopaBirthcertificatesResults = this.Reportbirthcertificates.$results;
    
    if (this.moiDopaBirthcertificatesResults.length !== 0) {
      this.checkmoiDopaBirthcertificatesResults = true;
    } else {
      this.checkmoiDopaBirthcertificatesResults = false;
    }
  }

}
