import { Component, OnInit } from '@angular/core';
import { DopaMoiBorderPassesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-border-passes/dxc-model-dopa-moi-border-passes.interface';
import { IDxc_Model_Moi_Dopa_Border_Passes } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Border_Passes';

@Component({
  selector: 'app-list-contact-borderpasses',
  templateUrl: './list-contact-borderpasses.component.html',
  styleUrls: ['./list-contact-borderpasses.component.scss']
})
export class ListContactBorderpassesComponent implements OnInit {

  moiDopaBorderPassesCount: number;
  moiDopaBorderPassesResults: IDxc_Model_Moi_Dopa_Border_Passes[];
  report_name: string;
  exitCode: any;
  
  constructor(private ReportborderPasses: DopaMoiBorderPassesMetadata) { }

  ngOnInit() {
    this.ReportborderPasses.getSearchDataContact();
    this.moiDopaBorderPassesResults = this.ReportborderPasses.$resultsContact;
    this.moiDopaBorderPassesCount = this.ReportborderPasses.$countContact;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.moiDopaBorderPassesResults;
  } 

}
