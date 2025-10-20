import {DopProbationerMetadata} from '../../../../../localsearch/qmreporttemplate/dxc-model-dop-probationer/dxc-model-dop-probationer.interface';
import {IDxc_Model_Dop_Probationer} from '../../../../../../shared/models/Dxc_Model_Dop_Probationer';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-probations',
  templateUrl: './list-left-probations.component.html',
  styleUrls: ['./list-left-probations.component.scss'],
  providers: [DopProbationerMetadata]
})
export class ListLeftProbationsComponent implements OnInit {
  @Output() outputAlgationsProbationer = new EventEmitter<{app: string, content: {}}>();
  probationerResults: IDxc_Model_Dop_Probationer[];
  checkProbationerResults: boolean;
  probationerCount: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportDopProbationer: DopProbationerMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportDopProbationer.getSearchData();
    this.probationerResults = this.ReportDopProbationer.$results;
    this.probationerCount = this.ReportDopProbationer.$count;
    
    if(this.probationerResults.length !== 0 ){
      this.checkProbationerResults = true;
    } else {
      this.checkProbationerResults = false;
    }
  }

  openModal(id: string, selectLeftData: string) {
    this.bodyText = selectLeftData['citizenCardNumber'];
    if(this.bodyText) {
      this.modalService.open(id);
      this.selectLeftData = selectLeftData;
    } else {
      this.selectLeftData = selectLeftData;
      this.sendDataToSingleReport();
    }
  }

  sendDataToSingleReport() {
    let selectLeftData = {
      app: 'app-list-left-probations',
      content: this.selectLeftData
    }
    this.outputAlgationsProbationer.emit(selectLeftData);
    this.closeModal('probationerModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
