import { Component, OnInit } from '@angular/core';
import { DepMoiCrippleMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dep-moi-cripple/dxc-model-dep-moi-cripple.interface';
import { IDxc_Model_Dep_Moi_Cripple } from 'src/app/core/shared/models/Dxc_Model_Dep_Moi_Cripple';

@Component({
  selector: 'app-list-left-cripple',
  templateUrl: './list-left-cripple.component.html',
  styleUrls: ['./list-left-cripple.component.scss']
})
export class ListLeftCrippleComponent implements OnInit {

  crippleResults: IDxc_Model_Dep_Moi_Cripple[];
  checkCrippleResults: boolean;
  constructor(private ReportMoiDepcripple: DepMoiCrippleMetadata) { }

  ngOnInit() {

    this.ReportMoiDepcripple.getSearchData();
    this.crippleResults = this.ReportMoiDepcripple.$results;
    console.log('this.crippleResults');
    console.log(this.crippleResults);

    if (this.crippleResults.length !== 0) {
      this.checkCrippleResults = true;
    } else {
      this.checkCrippleResults = false;
    }

  }

}
