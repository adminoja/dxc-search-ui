import { Component, OnInit } from '@angular/core';
import { DopaMoiBirthCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-birthcertificates/dxc-model-dopa-moi-birthcertificates.interface';
import { IDxc_Model_Dopa_Moi_Birth_Certificates } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Birth_Certificates';

@Component({
  selector: 'app-list-contact-birthcertificates',
  templateUrl: './list-contact-birthcertificates.component.html',
  styleUrls: ['./list-contact-birthcertificates.component.scss']
})
export class ListContactBirthcertificatesComponent implements OnInit {
  
  moiDopaBirthcertificatesResults: IDxc_Model_Dopa_Moi_Birth_Certificates[];
  moiDopaBirthcertificatesCount: number;
  report_name: string;
  constructor(private Reportbirthcertificates: DopaMoiBirthCertificatesMetadata) { }

  ngOnInit() {
    this.Reportbirthcertificates.getSearchDataContact();
    this.moiDopaBirthcertificatesResults = this.Reportbirthcertificates.$resultsContact;
    this.moiDopaBirthcertificatesCount = this.Reportbirthcertificates.$countContact;
    this.report_name = localStorage.getItem('report_name');
  }

}
