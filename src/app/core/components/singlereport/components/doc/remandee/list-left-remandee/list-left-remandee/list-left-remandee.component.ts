import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IDxc_Model_Doc_Remandee } from 'src/app/core/shared/models/Dxc_Model_Doc_Remandee';
import { DocRemandeeMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-remandee/dxc-model-doc-remandee/dxc-model-doc-remandee.interface';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-remandee',
  templateUrl: './list-left-remandee.component.html',
  styleUrls: ['./list-left-remandee.component.scss'],
  providers: [DocRemandeeMetadata]
})
export class ListLeftRemandeeComponent implements OnInit {
  @Output() outputAlgationsRemandee = new EventEmitter<{app: string, content: {}}>();
  remandeeResults: IDxc_Model_Doc_Remandee[];
  ckeckremandeeResults: boolean;
  remandeeCount: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportDocRemandee: DocRemandeeMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportDocRemandee.getSearchData();
    this.remandeeResults = this.ReportDocRemandee.$results;
    this.remandeeCount = this.ReportDocRemandee.$count;

    if (this.remandeeResults.length !== 0) {
      this.ckeckremandeeResults = true;
    } else {
      this.ckeckremandeeResults = false;
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
      app: 'app-list-left-remandee',
      content: this.selectLeftData
    }
    this.outputAlgationsRemandee.emit(selectLeftData);
    this.closeModal('remandeeModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}