import {DsiWarrantMetadata} from '../../../../localsearch/qmreporttemplate/dxc-model-dsi-warrant/dxc-model-dsi-warrant.interface';
import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dsi_Warrant } from 'src/app/core/shared/models/Dxc_Model_Dsi_Warrant';

@Component({
  selector: 'app-list-left-warrant',
  templateUrl: './list-left-warrant.component.html',
  styleUrls: ['./list-left-warrant.component.scss'],
  providers: [DsiWarrantMetadata]
})
export class ListLeftWarrantComponent implements OnInit {
  warrantResults: IDxc_Model_Dsi_Warrant[];
  checkwarrantResults: boolean;
  constructor(private ReportDsiWarrant: DsiWarrantMetadata) { }

  ngOnInit() {
    this.ReportDsiWarrant.getSearchData();
    this.warrantResults = this.ReportDsiWarrant.$results;
    console.log('this.warrantResults');
    console.log(this.warrantResults);

    if (this.warrantResults.length !== 0) {
      this.checkwarrantResults = true;
    } else {
      this.checkwarrantResults = false;
    }
  }

}
