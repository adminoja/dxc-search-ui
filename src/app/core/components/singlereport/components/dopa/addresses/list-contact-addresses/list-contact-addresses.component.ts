import { Component, OnInit } from '@angular/core';
import { DopaMoiAddressesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-addresses/dxc-model-dopa-moi-addresses.interface';
import { IDxc_Model_Dopa_Moi_Addresses } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Addresses';

@Component({
  selector: 'app-list-contact-addresses',
  templateUrl: './list-contact-addresses.component.html',
  styleUrls: ['./list-contact-addresses.component.scss']
})
export class ListContactAddressesComponent implements OnInit {
  
  moidopaaddressesResults: IDxc_Model_Dopa_Moi_Addresses[];
  moidopaaddressesCount: number;
  report_name: string;
  constructor(private ReportMoiDopaAddresses: DopaMoiAddressesMetadata) { }

  ngOnInit() {
    this.ReportMoiDopaAddresses.getSearchDataContact();
    this.moidopaaddressesResults = this.ReportMoiDopaAddresses.$resultsContact;
    this.moidopaaddressesCount = this.ReportMoiDopaAddresses.$countContact;
    this.report_name = localStorage.getItem('report_name');
  }

}
