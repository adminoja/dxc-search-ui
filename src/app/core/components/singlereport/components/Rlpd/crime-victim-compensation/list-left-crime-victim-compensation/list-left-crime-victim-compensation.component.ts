import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RlpdCrimeVictimCompensationMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-crime-victim-compensation/dxc-model-rlpd-crime-victim-compensation.interface';
import { IDxc_Model_Rlpd_CrimeVictimCompensation } from 'src/app/core/shared/models/Dxc_Model_Rlpd_CrimeVictimCompensation';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-crime-victim-compensation',
  templateUrl: './list-left-crime-victim-compensation.component.html',
  styleUrls: ['./list-left-crime-victim-compensation.component.scss'],
  providers: [RlpdCrimeVictimCompensationMetadata]
})
export class ListLeftCrimeVictimCompensationComponent implements OnInit {
  @Output() outputNormalCrimeVictimCompensation = new EventEmitter<{app: string, content: {}}>();
  crimeVictimCompensationResults: IDxc_Model_Rlpd_CrimeVictimCompensation[];
  checkcrimeVictimCompensationResults: boolean;
  crimeVictimCompensationCount: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportRlpdCrimeVictimCompensation: RlpdCrimeVictimCompensationMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportRlpdCrimeVictimCompensation.getSearchData();
    this.crimeVictimCompensationResults = this.ReportRlpdCrimeVictimCompensation.$results;
    this.crimeVictimCompensationCount = this.ReportRlpdCrimeVictimCompensation.$count;
    console.log('this.crimeVictimCompensationResults');
    console.log(this.crimeVictimCompensationResults);

    if (this.crimeVictimCompensationResults.length !== 0) {
      this.checkcrimeVictimCompensationResults = true;
    } else {
      this.checkcrimeVictimCompensationResults = false;
    }
  }

  openModal(id: string, selectLeftData: string) {
    this.bodyText = selectLeftData['victimCitizenId'];
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
      app: 'app-list-left-crime-victim-compensation',
      content: this.selectLeftData
    }
    this.outputNormalCrimeVictimCompensation.emit(selectLeftData);
    this.closeModal('crimeVictimCompensationModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
