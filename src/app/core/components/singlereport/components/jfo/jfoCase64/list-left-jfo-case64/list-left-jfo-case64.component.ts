import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JfoJfoCase64Metadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-jfo-jfo-case64/dxc-model-jfo-jfo-case64.interface';
import { IDxc_Model_Jfo_Jfo_Case64 } from 'src/app/core/shared/models/Dxc_Model_Jfo_Jfo_Case64';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-jfo-case64',
  templateUrl: './list-left-jfo-case64.component.html',
  styleUrls: ['./list-left-jfo-case64.component.scss'],
  providers: [
    JfoJfoCase64Metadata
  ]
})
export class ListLeftJfoCase64Component implements OnInit {
  @Output() outputNormalJfoCase64 = new EventEmitter<{app: string, content: {}}>();
  jfoCase64Results: IDxc_Model_Jfo_Jfo_Case64[];
  checkjfoCase64Results: boolean;
  jfoCase64Count: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportJfoJfoCase64: JfoJfoCase64Metadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportJfoJfoCase64.getSearchData();
    this.jfoCase64Results = this.ReportJfoJfoCase64.$results;
    this.jfoCase64Count = this.ReportJfoJfoCase64.$count;
    if(this.jfoCase64Results.length !== 0 ){
      this.checkjfoCase64Results = true;
    } else {
      this.checkjfoCase64Results = false;
    }
  }

  openModal(id: string, selectLeftData: string) {
    this.bodyText = selectLeftData['cardId'];
    console.log(this.bodyText)
    if(this.bodyText) {
      this.modalService.open(id);
      this.selectLeftData = selectLeftData;
    } else {
      this.selectLeftData = selectLeftData;
      this.sendDataToSingleReport();
    }
  }

  sendDataToSingleReport() {
    console.log(this.selectLeftData)
    let selectLeftData = {
      app: 'app-list-left-jfo-case64',
      content: this.selectLeftData
    }
    this.outputNormalJfoCase64.emit(selectLeftData);
    console.log(this.outputNormalJfoCase64)
    this.closeModal('jfoCase64Modal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
