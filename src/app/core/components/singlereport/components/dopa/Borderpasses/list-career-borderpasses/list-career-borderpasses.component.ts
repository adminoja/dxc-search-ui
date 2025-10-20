import { Component, OnInit } from '@angular/core';
import { DopaMoiBorderPassesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-border-passes/dxc-model-dopa-moi-border-passes.interface';
import { IDxc_Model_Moi_Dopa_Border_Passes } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Border_Passes';

@Component({
  selector: 'app-list-career-borderpasses',
  templateUrl: './list-career-borderpasses.component.html',
  styleUrls: ['./list-career-borderpasses.component.scss']
})
export class ListCareerBorderpassesComponent implements OnInit {
  moiDopaBorderPassesCount: number;
  moiDopaBorderPassesResults: IDxc_Model_Moi_Dopa_Border_Passes[];
  report_name: string;
  exitCode: any;
  constructor(private ReportborderPasses: DopaMoiBorderPassesMetadata) { }

  ngOnInit() {
    this.ReportborderPasses.getSearchDataCareer();
    this.moiDopaBorderPassesResults = this.ReportborderPasses.$resultsCareer;
    this.moiDopaBorderPassesCount = this.ReportborderPasses.$countCareer;
    this.report_name = localStorage.getItem('report_name');
    this.exitCode = this.moiDopaBorderPassesResults;
  }

}
