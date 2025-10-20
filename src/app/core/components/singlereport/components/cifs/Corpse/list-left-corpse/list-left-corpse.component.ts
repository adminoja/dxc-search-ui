import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CifsCorpseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-cifs-corpse/dxc-model-cifs-corpse.interface';
import { IDxc_Model_Cifs_Corpse } from 'src/app/core/shared/models/Dxc_Model_Cifs_Corpse';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-corpse',
  templateUrl: './list-left-corpse.component.html',
  styleUrls: ['./list-left-corpse.component.scss'],
  providers: [CifsCorpseMetadata]
})
export class ListLeftCorpseComponent implements OnInit {
  @Output() outputNormalCorpse = new EventEmitter<{app: string, content: {}}>();
  corpseResults: IDxc_Model_Cifs_Corpse[];
  checkCorpseResults: boolean;
  corpseCount: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportCifsCifsCorpse: CifsCorpseMetadata, private modalService: ModalService) { }

  ngOnInit() {
    this.ReportCifsCifsCorpse.getSearchData();
    this.corpseResults = this.ReportCifsCifsCorpse.$results;
    this.corpseCount = this.ReportCifsCifsCorpse.$count;
    if(this.corpseResults.length !== 0 ){
      this.checkCorpseResults = true;
    } else {
      this.checkCorpseResults = false;
    }
  }

  openModal(id: string, selectLeftData: string) {
    this.bodyText = selectLeftData['personNationalityText'];
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
      app: 'app-list-left-corpse',
      content: this.selectLeftData
    }
    this.outputNormalCorpse.emit(selectLeftData);
    this.closeModal('corpseModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
