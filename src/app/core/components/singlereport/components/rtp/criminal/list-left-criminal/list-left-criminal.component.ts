import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RtpCriminalMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-criminal/dxc-model-rtp-criminal.interface';
import { IDxc_Model_Rtp_Criminal } from 'src/app/core/shared/models/Dxc_Model_Rtp_Criminal';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-criminal',
  templateUrl: './list-left-criminal.component.html',
  styleUrls: ['./list-left-criminal.component.scss'],
  providers: [RtpCriminalMetadata]
})
export class ListLeftCriminalComponent implements OnInit {
  @Output() outputAlgationsCriminal = new EventEmitter<{app: string, content: {}}>();
  criminalResults: IDxc_Model_Rtp_Criminal[];
  checkcriminalResults: boolean;
  criminalCount: number;
  bodyText: string;
  selectLeftData: string;

  constructor(private ReportRtpCriminal: RtpCriminalMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportRtpCriminal.getSearchData();
    this.criminalResults = this.ReportRtpCriminal.$results;
    this.criminalCount = this.ReportRtpCriminal.$count;
    if (this.criminalResults.length !== 0) {
      this.checkcriminalResults = true;
    } else {
      this.checkcriminalResults = false;
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
      app: 'app-list-left-criminal',
      content: this.selectLeftData
    }
    this.outputAlgationsCriminal.emit(selectLeftData);
    this.closeModal('criminalModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
