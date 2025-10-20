import { Component, OnInit } from '@angular/core';
import { DopaMoiMarriageCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-marriage-certificates/dxc-model-dopa-moi-marriage-certificates.interface';
import { IDxc_Model_Moi_Dopa_Marriage_Certificates } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Marriage_Certificates';

@Component({
  selector: 'app-list-left-marriagecertificates',
  templateUrl: './list-left-marriagecertificates.component.html',
  styleUrls: ['./list-left-marriagecertificates.component.scss'],
  providers: [
    DopaMoiMarriageCertificatesMetadata
  ]

})
export class ListLeftMarriagecertificatesComponent implements OnInit {

  moiDopaMarriageCertificatesResults: IDxc_Model_Moi_Dopa_Marriage_Certificates[];
  checkmoiDopaMarriageCertificatesResults: boolean;
  constructor(private ReportMarriageCertificates: DopaMoiMarriageCertificatesMetadata) { }
  ngOnInit() {
    this.ReportMarriageCertificates.getSearchData();
    this.moiDopaMarriageCertificatesResults = this.ReportMarriageCertificates.$results;
    if (this.moiDopaMarriageCertificatesResults.length !== 0) {
      this.checkmoiDopaMarriageCertificatesResults = true;
    } else {
      this.checkmoiDopaMarriageCertificatesResults = false;
    }
  }
}
