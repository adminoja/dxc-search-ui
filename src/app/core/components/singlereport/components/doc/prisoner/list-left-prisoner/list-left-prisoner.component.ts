import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Dxc_Model_Doc_Prisoner } from 'src/app/core/shared/models/Dxc_Model_Doc_Prisoner';
import { DocPrisonerMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.interface';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-prisoner',
  templateUrl: './list-left-prisoner.component.html',
  styleUrls: ['./list-left-prisoner.component.css']
})
export class ListLeftPrisonerComponent implements OnInit {
  @Output() outputAlgationsPrisoner = new EventEmitter<{app: string, content: {}}>();
  prisonerResults: Dxc_Model_Doc_Prisoner[];
  checkprisonerResults: boolean;
  prisonerCount: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportDocPrisoner: DocPrisonerMetadata, private modalService: ModalService) {
  }

  ngOnInit() {
    this.ReportDocPrisoner.getSearchData();
    this.prisonerResults = this.ReportDocPrisoner.$results;
    this.prisonerCount = this.ReportDocPrisoner.$count;
    if (this.prisonerResults.length !== 0) {
      this.checkprisonerResults = true;
    } else {
      this.checkprisonerResults = false;
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
      app: 'app-list-left-prisoner',
      content: this.selectLeftData
    }
    this.outputAlgationsPrisoner.emit(selectLeftData);
    this.closeModal('prisonerModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }


}
