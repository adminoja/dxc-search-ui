import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DjopJuvenileOffender65Metadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender65/dxc-model-djop-juvenile-offender65.interface';
import { IDxc_Model_Djop_JuvenileOffender65 } from 'src/app/core/shared/models/Dxc_Model_Djop_JuvenileOffender65';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-juvenile-offender65',
  templateUrl: './list-left-juvenile-offender65.component.html',
  styleUrls: ['./list-left-juvenile-offender65.component.scss'],
  providers: [DjopJuvenileOffender65Metadata]
})
export class ListLeftJuvenileOffender65Component implements OnInit {
  @Output() outputAlgationsJuvenileOffender65 = new EventEmitter<{app: string, content: {}}>();
  juvenileOffender65Results: IDxc_Model_Djop_JuvenileOffender65[];
  checkjuvenileOffender65Results: boolean;
  juvenileOffender65Count: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportDjopJuvenileOffender65: DjopJuvenileOffender65Metadata, private modalService: ModalService) { }

  ngOnInit(): void {
    this.ReportDjopJuvenileOffender65.getSearchData();
    this.juvenileOffender65Results = this.ReportDjopJuvenileOffender65.$results;
    this.juvenileOffender65Count = this.ReportDjopJuvenileOffender65.$count;

    if (this.juvenileOffender65Results.length !== 0) {
      this.checkjuvenileOffender65Results = true;
    } else {
      this.checkjuvenileOffender65Results = false;
    }
  }

  openModal(id: string, selectLeftData: string) {
    this.bodyText = selectLeftData['jvnCardId'];
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
      app: 'app-list-left-juvenile-offender65',
      content: this.selectLeftData
    }
    this.outputAlgationsJuvenileOffender65.emit(selectLeftData);
    this.closeModal('juvenileOffender65Modal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
