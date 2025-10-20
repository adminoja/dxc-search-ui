import { Component, OnInit } from '@angular/core';
import { DopaMoiPersonChangenamePrimaryMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-person-changename-primary/dxc-model-dopa-moi-person-changename-primary.interface';
import { IDxc_Model_Dopa_Moi_PersonChangenamePrimary } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_PersonChangenamePrimary';

@Component({
  selector: 'app-list-left-person-changename-primary',
  templateUrl: './list-left-person-changename-primary.component.html',
  styleUrls: ['./list-left-person-changename-primary.component.scss']
})
export class ListLeftPersonChangenamePrimaryComponent implements OnInit {

  moiDopaPersonChangenamePrimaryResults: IDxc_Model_Dopa_Moi_PersonChangenamePrimary[];
  checkMoiDopaPersonChangenamePrimaryResults: boolean;
  constructor(private ReportMoiDopaPersonChangenamePrimary: DopaMoiPersonChangenamePrimaryMetadata) { }

  ngOnInit() {
    this.ReportMoiDopaPersonChangenamePrimary.getSearchData();
    this.moiDopaPersonChangenamePrimaryResults = this.ReportMoiDopaPersonChangenamePrimary.$results;
    
    if(this.moiDopaPersonChangenamePrimaryResults.length !== 0 ){
      this.checkMoiDopaPersonChangenamePrimaryResults = true;
    } else {
      this.checkMoiDopaPersonChangenamePrimaryResults = false;
    }
  }

}
