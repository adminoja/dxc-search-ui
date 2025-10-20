import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AgothChargeVictimMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-agoth-charge-victim/dxc-model-agoth-charge-victim.interface';
import { IDxc_Model_Agoth_ChargeVictim } from 'src/app/core/shared/models/Dxc_Model_Agoth_ChargeVictim';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-agoth-charge-victim',
  templateUrl: './list-left-agoth-charge-victim.component.html',
  styleUrls: ['./list-left-agoth-charge-victim.component.scss']
})
export class ListLeftAgothChargeVictimComponent implements OnInit {
  @Output() outputNormalChargeVictim = new EventEmitter<{app: string, content: {}}>();
  agothChargeVictimResults: IDxc_Model_Agoth_ChargeVictim[];
  checkagothChargeVictimResults: boolean;
  agothChargeVictimCount: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportAgothChargeVictim: AgothChargeVictimMetadata, private modalService: ModalService) { }

  ngOnInit() {

    this.ReportAgothChargeVictim.getSearchData();
    this.agothChargeVictimResults = this.ReportAgothChargeVictim.$results;
    this.agothChargeVictimCount = this.ReportAgothChargeVictim.$count;
    if(this.agothChargeVictimResults.length !== 0 ){
      this.checkagothChargeVictimResults = true;
    } else {
      this.checkagothChargeVictimResults = false;
    }
  }

  openModal(id: string, selectLeftData: string) {
    this.bodyText = selectLeftData['citizenId'];
    if(this.bodyText !== "-" && this.bodyText !== null && this.bodyText !== 'null' ) {
      this.modalService.open(id);
      this.selectLeftData = selectLeftData;
    } else {
      this.selectLeftData = selectLeftData;
      this.sendDataToSingleReport();
    }
  }

  sendDataToSingleReport() {
    let selectLeftData = {
      app: 'app-list-left-agoth-charge-victim',
      content: this.selectLeftData
    }
    this.outputNormalChargeVictim.emit(selectLeftData);
    this.closeModal('chargeVictimModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
