import { Component, OnInit } from '@angular/core';
import { DopaMoiPersonChangelastnameMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-dopa-person-changelastname/dxc-model-dopa-moi-dopa-person-changelastname.interface';
import { IDxc_Model_Dopa_MoiDopaPersonChangelastname } from 'src/app/core/shared/models/Dxc_Model_Dopa_MoiDopaPersonChangelastname';

@Component({
  selector: 'app-list-table-contact-person-changelastname',
  templateUrl: './list-table-contact-person-changelastname.component.html',
  styleUrls: ['./list-table-contact-person-changelastname.component.scss']
})
export class ListTableContactPersonChangelastnameComponent implements OnInit {

  moiDopaPersonChangelastnameResults: IDxc_Model_Dopa_MoiDopaPersonChangelastname[];
  moiDopaPersonChangelastnameCount: number;
  report_name: string;
  exitCode: any;
  constructor(private ReportMoiDopaPersonChangelastname: DopaMoiPersonChangelastnameMetadata) { }

  ngOnInit() {
    this.ReportMoiDopaPersonChangelastname.getSearchDataContact();
    this.moiDopaPersonChangelastnameResults = this.ReportMoiDopaPersonChangelastname.$resultsContact;
    this.moiDopaPersonChangelastnameCount = this.ReportMoiDopaPersonChangelastname.$countContact;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.moiDopaPersonChangelastnameResults;
  }

}
