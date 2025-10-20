import {IDxc_Model_Dop_Probationer} from '../../../../../../shared/models/Dxc_Model_Dop_Probationer';
import { DopProbationerMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dop-probationer/dxc-model-dop-probationer.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-address-probations',
  templateUrl: './list-address-probations.component.html',
  styleUrls: ['./list-address-probations.component.scss']
})
export class ListAddressProbationsComponent implements OnInit {
  probationerResults: IDxc_Model_Dop_Probationer[];

  constructor(private ReportDopProbationer: DopProbationerMetadata) {
  }

  ngOnInit() {
    this.ReportDopProbationer.getSearchData();
    this.probationerResults = this.ReportDopProbationer.$results;
  }
}
