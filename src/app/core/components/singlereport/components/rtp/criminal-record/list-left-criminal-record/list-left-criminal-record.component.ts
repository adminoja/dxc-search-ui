import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RtpCriminalRecordMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-criminal-record/dxc-model-rtp-criminal-record.interface';
import { IDxc_Model_Rtp_CriminalRecord } from 'src/app/core/shared/models/Dxc_Model_Rtp_CriminalRecord';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-criminal-record',
  templateUrl: './list-left-criminal-record.component.html',
  styleUrls: ['./list-left-criminal-record.component.scss'],
  providers: [RtpCriminalRecordMetadata]
})
export class ListLeftCriminalRecordComponent implements OnInit {
  @Output() outputAllgationsCriminalRecord = new EventEmitter<{app: string, content: {}}>();
  criminalRecordResults: IDxc_Model_Rtp_CriminalRecord[];
  checkCriminalRecordResults: boolean;
  criminalRecordCount: number;
  bodyText: string;
  selectLeftData: string;

  constructor(private ReportRtpCriminalRecord: RtpCriminalRecordMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportRtpCriminalRecord.getSearchData();
    this.criminalRecordResults = this.ReportRtpCriminalRecord.$results;
    this.criminalRecordCount = this.ReportRtpCriminalRecord.$count;
    if (this.criminalRecordResults.length !== 0) {
      this.checkCriminalRecordResults = true;
    } else {
      this.checkCriminalRecordResults = false;
    }
  }

  openModal(id: string, selectLeftData: string) {
    this.bodyText = selectLeftData['idNo'];
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
      app: 'app-list-left-criminal-record',
      content: this.selectLeftData
    }
    this.outputAllgationsCriminalRecord.emit(selectLeftData);
    this.closeModal('criminalRecordModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
