import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RtpCriminalCaseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-criminal-case/dxc-model-rtp-criminal-case.interface';
import { IDxc_Model_Rtp_CriminalCase } from 'src/app/core/shared/models/Dxc_Model_Rtp_CriminalCase';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-criminal-case',
  templateUrl: './list-left-criminal-case.component.html',
  styleUrls: ['./list-left-criminal-case.component.scss'],
  providers: [RtpCriminalCaseMetadata]
})
export class ListLeftCriminalCaseComponent implements OnInit {
  @Output() outputAlgationsCriminalCase = new EventEmitter<{app: string, content: {}}>();
  criminalCaseResults: IDxc_Model_Rtp_CriminalCase[];
  checkcriminalCaseResults: boolean;
  criminalCaseCount: number;
  bodyText: string;
  selectLeftData: string;

  constructor(private ReportRtpCriminalCase: RtpCriminalCaseMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportRtpCriminalCase.getSearchData();
    this.criminalCaseResults = this.ReportRtpCriminalCase.$results;
    this.criminalCaseCount = this.ReportRtpCriminalCase.$count;
    if (this.criminalCaseResults.length !== 0) {
      this.checkcriminalCaseResults = true;
    } else {
      this.checkcriminalCaseResults = false;
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
      app: 'app-list-left-criminal-case',
      content: this.selectLeftData
    }
    this.outputAlgationsCriminalCase.emit(selectLeftData);
    this.closeModal('criminalCaseModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
