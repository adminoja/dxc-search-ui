import { Component, OnInit } from '@angular/core';
import { DopaMoiBorderPassesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-border-passes/dxc-model-dopa-moi-border-passes.interface';
import { IDxc_Model_Moi_Dopa_Border_Passes } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Border_Passes';



@Component({
  selector: 'app-list-left-borderpasses',
  templateUrl: './list-left-borderpasses.component.html',
  styleUrls: ['./list-left-borderpasses.component.scss'],
  providers: [
    DopaMoiBorderPassesMetadata
  ]
})
export class ListLeftBorderpassesComponent implements OnInit {
  moiDopaBorderPassesResults: IDxc_Model_Moi_Dopa_Border_Passes[];
  checkmoiDopaBorderPassesResults: boolean;
  constructor(private ReportborderPasses: DopaMoiBorderPassesMetadata) { }
  ngOnInit() {
    this.ReportborderPasses.getSearchData();
    this.moiDopaBorderPassesResults = this.ReportborderPasses.$results;

    if (this.moiDopaBorderPassesResults.length !== 0) {
      this.checkmoiDopaBorderPassesResults = true;
    } else {
      this.checkmoiDopaBorderPassesResults = false;
    }
  }

}
