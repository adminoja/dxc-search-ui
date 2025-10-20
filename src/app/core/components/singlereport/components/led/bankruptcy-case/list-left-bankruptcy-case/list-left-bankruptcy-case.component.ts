import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IDxcModelLedBankruptcyCase } from 'src/app/core/shared/models/Dxc_Model_Led_BankruptcyCase';
import { LedBankruptcyCaseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-led-bankruptcy-case/dxc-model-led-bankruptcy-case.interface';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-bankruptcy-case',
  templateUrl: './list-left-bankruptcy-case.component.html',
  styleUrls: ['./list-left-bankruptcy-case.component.scss'],
  providers: [LedBankruptcyCaseMetadata]
})
export class ListLeftBankruptcyCaseComponent implements OnInit {
  @Output() outputNormalBankruptcyCase = new EventEmitter<{app: string, content: {}}>();
  bankruptcyCaseResults: IDxcModelLedBankruptcyCase[];
  checkbankruptcyCaseResults: boolean;
  bankruptcyCaseCount: number;
  bodyText: string;
  selectLeftData: string;

  constructor(private ReportLedBankruptcyCase: LedBankruptcyCaseMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportLedBankruptcyCase.getSearchData();
    this.bankruptcyCaseResults = this.ReportLedBankruptcyCase.$results;
    this.bankruptcyCaseCount = this.ReportLedBankruptcyCase.$count;
    console.log('this.bankruptcyCaseResults');
    console.log(this.bankruptcyCaseResults);

    if (this.bankruptcyCaseResults.length !== 0) {
      this.checkbankruptcyCaseResults = true;
    } else {
      this.checkbankruptcyCaseResults = false;
    }
  }

  openModal(id: string, selectLeftData: string) {
    this.bodyText = selectLeftData['defendantId'];
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
      app: 'app-list-left-bankruptcy-case',
      content: this.selectLeftData
    }
    this.outputNormalBankruptcyCase.emit(selectLeftData);
    this.closeModal('bankruptcyCaseModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }


}
