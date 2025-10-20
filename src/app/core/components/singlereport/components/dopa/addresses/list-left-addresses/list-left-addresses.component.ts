import {DopaMoiAddressesMetadata} from '../../../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-addresses/dxc-model-dopa-moi-addresses.interface';
import {IDxc_Model_Dopa_Moi_Addresses} from '../../../../../../shared/models/Dxc_Model_Dopa_Moi_Addresses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-left-addresses',
  templateUrl: './list-left-addresses.component.html',
  styleUrls: ['./list-left-addresses.component.scss']
})
export class ListLeftAddressesComponent implements OnInit {
  moidopaaddressesResults: IDxc_Model_Dopa_Moi_Addresses[];
  checkMoidopaaddressesResults: boolean;
  constructor(private ReportDopaMoiAddresses: DopaMoiAddressesMetadata) { }

  ngOnInit() {
    this.ReportDopaMoiAddresses.getSearchData();
    this.moidopaaddressesResults = this.ReportDopaMoiAddresses.$results;
    
    if(this.moidopaaddressesResults.length !== 0 ){
      this.checkMoidopaaddressesResults = true;
    } else {
      this.checkMoidopaaddressesResults = false;
    }
  }

}
