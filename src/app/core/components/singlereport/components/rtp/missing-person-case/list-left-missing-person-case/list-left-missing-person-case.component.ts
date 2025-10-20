import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RtpMissingPersonCaseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-missing-person-case/dxc-model-rtp-missing-person-case.interface';
import { IDxc_Model_Rtp_MissingPersonCase } from 'src/app/core/shared/models/Dxc_Model_Rtp_MissingPersonCase';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-missing-person-case',
  templateUrl: './list-left-missing-person-case.component.html',
  styleUrls: ['./list-left-missing-person-case.component.scss']
})
export class ListLeftMissingPersonCaseComponent implements OnInit {
  @Output() outputNormalMissingPersonCase = new EventEmitter<{app: string, content: {}}>();
  missingPersonCaseResults: IDxc_Model_Rtp_MissingPersonCase[];
  checkmissingPersonCaserResults: boolean;
  missingPersonCaseCount: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportRtpMissingPersonCase: RtpMissingPersonCaseMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportRtpMissingPersonCase.getSearchData();
    this.missingPersonCaseResults = this.ReportRtpMissingPersonCase.$results;
    this.missingPersonCaseCount = this.ReportRtpMissingPersonCase.$count;
    if (this.missingPersonCaseResults.length !== 0) {
      this.checkmissingPersonCaserResults = true;
    } else {
      this.checkmissingPersonCaserResults = false;
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
      app: 'app-list-left-missing-person-case',
      content: this.selectLeftData
    }
    this.outputNormalMissingPersonCase.emit(selectLeftData);
    this.closeModal('missingPersonCaseModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
