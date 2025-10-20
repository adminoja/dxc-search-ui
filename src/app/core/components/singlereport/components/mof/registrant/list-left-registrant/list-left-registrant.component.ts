import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MofRegistrantMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-mof-registrant/dxc-model-mof-registrant.interface';
import { IDxc_Model_Mof_Registrant } from 'src/app/core/shared/models/Dxc_Model_Mof_Registrant';
import { ModalService } from 'src/app/core/shared/services/components/modal';

@Component({
  selector: 'app-list-left-registrant',
  templateUrl: './list-left-registrant.component.html',
  styleUrls: ['./list-left-registrant.component.scss']
})
export class ListLeftRegistrantComponent implements OnInit {
  @Output() outputNormalRegistrant = new EventEmitter<{app: string, content: {}}>();
  mofRegistrantResults: IDxc_Model_Mof_Registrant[];
  checkMofRegistrantResults: boolean;
  mofRegistrantCount: number;
  bodyText: string;
  selectLeftData: string;
  constructor(private ReportMofRegistrant: MofRegistrantMetadata, private modalService: ModalService) { }

  ngOnInit() {

    this.ReportMofRegistrant.getSearchData();
    this.mofRegistrantResults = this.ReportMofRegistrant.$results;
    this.mofRegistrantCount = this.ReportMofRegistrant.$count;
    if(this.mofRegistrantResults.length !== 0 ){
      this.checkMofRegistrantResults = true;
    } else {
      this.checkMofRegistrantResults = false;
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
    console.log(this.selectLeftData)
    let selectLeftData = {
      app: 'app-list-left-registrant',
      content: this.selectLeftData
    }
    this.outputNormalRegistrant.emit(selectLeftData);
    console.log(this.outputNormalRegistrant)
    this.closeModal('registrantModal');
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
