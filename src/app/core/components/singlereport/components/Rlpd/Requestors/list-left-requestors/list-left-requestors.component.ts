import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Dxc_Model_Rlpd_Requestors } from 'src/app/core/shared/models/Dxc_Model_Rlpd_Requestors';
import { RlpdRequestorsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.interface';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-requestors',
  templateUrl: './list-left-requestors.component.html',
  styleUrls: ['./list-left-requestors.component.scss']
})
export class ListLeftRequestorsComponent implements OnInit {
  @Output() outputNormalRequestors = new EventEmitter<{app: string, content: {}}>();
  requestorsResults: Dxc_Model_Rlpd_Requestors[];
  checkrequestorsResults : boolean ;
  requestorsCount: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportRlpdRequestors: RlpdRequestorsMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportRlpdRequestors.getSearchData();
    this.requestorsResults = this.ReportRlpdRequestors.$results;
    this.requestorsCount = this.ReportRlpdRequestors.$count;
    if (this.requestorsResults.length !== 0) {
      this.checkrequestorsResults = true;
    } else {
      this.checkrequestorsResults = false;
    }
  }

  openModal(id: string, selectLeftData: string) {
    this.bodyText = selectLeftData['personNationalIdentificationId'];
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
      app: 'app-list-left-requestors',
      content: this.selectLeftData
    }
    this.outputNormalRequestors.emit(selectLeftData);
    this.closeModal('requestorsModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
