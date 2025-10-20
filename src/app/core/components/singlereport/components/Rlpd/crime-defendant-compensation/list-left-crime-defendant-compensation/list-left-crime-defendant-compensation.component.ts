import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RlpdCrimeDefendantCompensationMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-crime-defendant-compensation/dxc-model-rlpd-crime-defendant-compensation.interface';
import { IDxc_Model_Rlpd_CrimeDefendantCompensation } from 'src/app/core/shared/models/Dxc_Model_Rlpd_CrimeDefendantCompensation';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-crime-defendant-compensation',
  templateUrl: './list-left-crime-defendant-compensation.component.html',
  styleUrls: ['./list-left-crime-defendant-compensation.component.scss'],
  providers: [RlpdCrimeDefendantCompensationMetadata]
})
export class ListLeftCrimeDefendantCompensationComponent implements OnInit {
  @Output() outputNormalCrimeDefendantCompensation = new EventEmitter<{app: string, content: {}}>();
  crimeDefendantCompensationResults: IDxc_Model_Rlpd_CrimeDefendantCompensation[];
  checkcrimeDefendantCompensationResults: boolean;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportRlpdCrimeDefendantCompensation: RlpdCrimeDefendantCompensationMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportRlpdCrimeDefendantCompensation.getSearchData();
    this.crimeDefendantCompensationResults = this.ReportRlpdCrimeDefendantCompensation.$results;

    if (this.crimeDefendantCompensationResults.length !== 0) {
      this.checkcrimeDefendantCompensationResults = true;
    } else {
      this.checkcrimeDefendantCompensationResults = false;
    }
  }

  openModal(id: string, selectLeftData: string) {
    this.bodyText = selectLeftData['dftCitizenId'];
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
      app: 'app-list-left-crime-defendant-compensation',
      content: this.selectLeftData
    }
    this.outputNormalCrimeDefendantCompensation.emit(selectLeftData);
    this.closeModal('crimeDefendantCompensationModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
