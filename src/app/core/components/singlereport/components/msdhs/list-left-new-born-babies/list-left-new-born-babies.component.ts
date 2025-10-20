import { Component, OnInit } from '@angular/core';
import { MsdhsMoiNewBornBabiesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-msdhs-moi-new-born-babies/dxc-model-msdhs-moi-new-born-babies.interface';
import { IDxc_Model_Msdhs_Moi_New_Born_Babies } from 'src/app/core/shared/models/Dxc_Model_Msdhs_Moi_New_Born_Babies';

@Component({
  selector: 'app-list-left-new-born-babies',
  templateUrl: './list-left-new-born-babies.component.html',
  styleUrls: ['./list-left-new-born-babies.component.scss'],
  providers: [MsdhsMoiNewBornBabiesMetadata]
})
export class ListLeftNewBornBabiesComponent implements OnInit {
  newBornBabiesResults: IDxc_Model_Msdhs_Moi_New_Born_Babies[];
  checknewBornBabiesResults: boolean;

  constructor(private ReportMsdhsMoiNewBornBabies: MsdhsMoiNewBornBabiesMetadata) { }

  ngOnInit() {
    this.ReportMsdhsMoiNewBornBabies.getSearchData();
    this.newBornBabiesResults = this.ReportMsdhsMoiNewBornBabies.$results;
    console.log('this.newBornBabiesResults');
    console.log(this.newBornBabiesResults);

    if (this.newBornBabiesResults.length !== 0) {
      this.checknewBornBabiesResults = true;
    } else {
      this.checknewBornBabiesResults = false;
    }
  }

}
