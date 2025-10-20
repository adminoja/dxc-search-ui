import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dopa_Moi_Aliens } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Aliens';
import { DopaMoiAliensMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-aliens/dxc-model-dopa-moi-aliens.interface';

@Component({
  selector: 'app-list-left-aliens',
  templateUrl: './list-left-aliens.component.html',
  styleUrls: ['./list-left-aliens.component.scss'],
  providers: [DopaMoiAliensMetadata]
})
export class ListLeftAliensComponent implements OnInit {
  aliensResults: IDxc_Model_Dopa_Moi_Aliens[];
  checkaliensResults: boolean;
  constructor(private ReportDopaMoiAliens: DopaMoiAliensMetadata) { }

  ngOnInit() {
    this.ReportDopaMoiAliens.getSearchData();
    this.aliensResults = this.ReportDopaMoiAliens.$results;
    console.log('this.aliensResults');
    console.log(this.aliensResults);

    if (this.aliensResults.length !== 0) {
      this.checkaliensResults = true;
    } else {
      this.checkaliensResults = false;
    }
  }
}