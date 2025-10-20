import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DjopJuvenileOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender/dxc-model-djop-juvenile-offender.interface';
import { Dxc_Model_Djop_JuvenileOffender } from 'src/app/core/shared/models/Dxc_Model_Djop_JuvenileOffender';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-juvenile-offender',
  templateUrl: './list-left-juvenile-offender.component.html',
  styleUrls: ['./list-left-juvenile-offender.component.scss']
})
export class ListLeftJuvenileOffenderComponent implements OnInit {
  @Output() outputAlgationsJuvenileOffender = new EventEmitter<{app: string, content: {}}>();
  juvenileOffenderResults: Dxc_Model_Djop_JuvenileOffender[];
  checkjuvenileOffenderResults: boolean;
  juvenileOffenderCount: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportJuvenileOffender: DjopJuvenileOffenderMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportJuvenileOffender.getSearchData();
    this.juvenileOffenderResults = this.ReportJuvenileOffender.$results;
    this.juvenileOffenderCount = this.ReportJuvenileOffender.$count;

    if (this.juvenileOffenderResults.length !== 0) {
      this.checkjuvenileOffenderResults = true;
    } else {
      this.checkjuvenileOffenderResults = false;
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
      app: 'app-list-left-juvenile-offender',
      content: this.selectLeftData
    }
    this.outputAlgationsJuvenileOffender.emit(selectLeftData);
    this.closeModal('juvenileOffenderModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
