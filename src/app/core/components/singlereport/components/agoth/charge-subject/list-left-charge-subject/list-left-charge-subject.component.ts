import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AgothChargeSubjectMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-agoth-charge-subjects/dxc-model-agoth-charge-subjects.interface';
import { IDxc_Model_Agoth_ChargeSubject } from 'src/app/core/shared/models/Dxc_Model_Agoth_ChargeSubject';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-charge-subject',
  templateUrl: './list-left-charge-subject.component.html',
  styleUrls: ['./list-left-charge-subject.component.scss'],
  providers: [
    AgothChargeSubjectMetadata
  ]
})
export class ListLeftChargeSubjectComponent implements OnInit {
  @Output() outputAllegationChargeSubject = new EventEmitter<{app: string, content: {}}>();
  chargeSubjectResults: IDxc_Model_Agoth_ChargeSubject[];
  checkchargeSubjectResults: boolean;
  AgothChargeSubjectCount: number;
  bodyText: string;
  selectLeftData: string;

  constructor(private ReportAgothChargeSubject: AgothChargeSubjectMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportAgothChargeSubject.getSearchData();
    this.chargeSubjectResults = this.ReportAgothChargeSubject.$results;
    this.AgothChargeSubjectCount = this.ReportAgothChargeSubject.$count;

    if (this.chargeSubjectResults.length !== 0) {
      this.checkchargeSubjectResults = true;
    } else {
      this.checkchargeSubjectResults = false;
    }
  }

  openModal(id: string, selectLeftData: string) {
    this.bodyText = selectLeftData['citizenId'];
    if(this.bodyText !== "-" && this.bodyText !== null && this.bodyText !== 'null' ) {
      this.modalService.open(id);
      this.selectLeftData = selectLeftData;
    } else {
      this.selectLeftData = selectLeftData;
      this.sendDataToSingleReport();
    }
  }

  sendDataToSingleReport() {
    let selectLeftData = {
      app: 'app-list-left-charge-subject',
      content: this.selectLeftData
    }
    this.outputAllegationChargeSubject.emit(selectLeftData);
    this.closeModal('chargeSubjectModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

