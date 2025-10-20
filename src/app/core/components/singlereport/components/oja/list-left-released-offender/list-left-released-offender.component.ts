import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DocReleasedOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-released-offender/dxc-model-released-offender.interface';
import { IDxc_Model_Doc_ReleasedOffender } from 'src/app/core/shared/models/Dxc_Model_Doc_ReleasedOffender';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-released-offender',
  templateUrl: './list-left-released-offender.component.html',
  styleUrls: ['./list-left-released-offender.component.scss']
})
export class ListLeftReleasedOffenderComponent implements OnInit {
  @Output() outputAlgationsReleasedOffender = new EventEmitter<{app: string, content: {}}>();
  releasedOffenderResults: IDxc_Model_Doc_ReleasedOffender[];
  checkReleasedOffenderResults: boolean;
  releasedOffenderCount: number;
  bodyText: string;
  selectLeftData: string;
  constructor( private ReportDocReleasedOffender:DocReleasedOffenderMetadata, private modalService: ModalService ) { }


  ngOnInit() {
    this.ReportDocReleasedOffender.getSearchData();
    this.releasedOffenderResults = this.ReportDocReleasedOffender.$results;
    this.releasedOffenderCount = this.ReportDocReleasedOffender.$count;

    if(this.releasedOffenderResults.length !== 0) {
      this.checkReleasedOffenderResults = true;
    } else {
      this.checkReleasedOffenderResults = false;
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
      app: 'app-list-left-released-offender',
      content: this.selectLeftData
    }
    this.outputAlgationsReleasedOffender.emit(selectLeftData);
    this.closeModal('releasedOffenderModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
