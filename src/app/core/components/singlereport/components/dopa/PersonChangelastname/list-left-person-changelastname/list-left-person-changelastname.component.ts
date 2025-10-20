import { Component, OnInit } from '@angular/core';
import { DopaMoiPersonChangelastnameMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-dopa-person-changelastname/dxc-model-dopa-moi-dopa-person-changelastname.interface';
import { IDxc_Model_Dopa_MoiDopaPersonChangelastname } from 'src/app/core/shared/models/Dxc_Model_Dopa_MoiDopaPersonChangelastname';

@Component({
  selector: 'app-list-left-person-changelastname',
  templateUrl: './list-left-person-changelastname.component.html',
  styleUrls: ['./list-left-person-changelastname.component.scss']
})
export class ListLeftPersonChangelastnameComponent implements OnInit {

  moiDopaPersonChangelastnameResults: IDxc_Model_Dopa_MoiDopaPersonChangelastname[];
  checkMoiDopaPersonChangelastnameResults: boolean;
  constructor(private ReportMoiDopaPersonChangelastname: DopaMoiPersonChangelastnameMetadata) { }

  ngOnInit() {
    this.ReportMoiDopaPersonChangelastname.getSearchData();
    this.moiDopaPersonChangelastnameResults = this.ReportMoiDopaPersonChangelastname.$results;
    
    if(this.moiDopaPersonChangelastnameResults.length !== 0 ){
      this.checkMoiDopaPersonChangelastnameResults = true;
    } else {
      this.checkMoiDopaPersonChangelastnameResults = false;
    }
  }

}
