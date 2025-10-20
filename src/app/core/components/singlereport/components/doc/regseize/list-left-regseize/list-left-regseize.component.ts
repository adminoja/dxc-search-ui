import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IDxc_Model_Doc_Reg_seize } from 'src/app/core/shared/models/Dxc_Model_Doc_Reg_seize';
import { DocRegseizeMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-reg-seize/dxc-model-doc-reg-seize.interface';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-regseize',
  templateUrl: './list-left-regseize.component.html',
  styleUrls: ['./list-left-regseize.component.scss'],
  providers: [DocRegseizeMetadata]
})
export class ListLeftRegseizeComponent implements OnInit {
  @Output() outputAlgationsRegseize = new EventEmitter<{app: string, content: {}}>();
  regseizeResults: IDxc_Model_Doc_Reg_seize[];
  checkregseizeResults: boolean;
  regseizeCount: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportDocRegseize: DocRegseizeMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportDocRegseize.getSearchData();
    this.regseizeResults = this.ReportDocRegseize.$results;
    this.regseizeCount = this.ReportDocRegseize.$count;
    console.log('this.regseizeResults');
    console.log(this.regseizeResults);

    if (this.regseizeResults.length !== 0) {
      this.checkregseizeResults = true;
    } else {
      this.checkregseizeResults = false;
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
      app: 'app-list-left-regseize',
      content: this.selectLeftData
    }
    this.outputAlgationsRegseize.emit(selectLeftData);
    this.closeModal('regseizeModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
