import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OncbNarcoticOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';
import { IDxc_Model_Oncb_NarcoticOffender } from 'src/app/core/shared/models/Dxc_Model_Oncb_NarcoticOffender';
import { ModalService } from 'src/app/core/shared/services/components/modal';


@Component({
  selector: 'app-list-left-narcotic-offender',
  templateUrl: './list-left-narcotic-offender.component.html',
  styleUrls: ['./list-left-narcotic-offender.component.scss'],
  providers: [OncbNarcoticOffenderMetadata]
})
export class ListLeftNarcoticOffenderComponent implements OnInit {
  @Output() outputAlgationsNarcoticOffender = new EventEmitter<{app: string, content: {}}>();
  narcoticOffenderResults: IDxc_Model_Oncb_NarcoticOffender[];
  checknarcoticOffenderResults: boolean;
  narcoticOffenderCount: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportOncbNarcoticOffender: OncbNarcoticOffenderMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportOncbNarcoticOffender.getSearchData();
    this.narcoticOffenderResults = this.ReportOncbNarcoticOffender.$results;
    this.narcoticOffenderCount = this.ReportOncbNarcoticOffender.$count;
    console.log('this.narcoticOffenderResults');
    console.log(this.narcoticOffenderResults);

    if (this.narcoticOffenderResults.length !== 0) {
      this.checknarcoticOffenderResults = true;
    } else {
      this.checknarcoticOffenderResults = false;
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
    this.outputAlgationsNarcoticOffender.emit(selectLeftData);
    this.closeModal('narcoticOffenderModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
