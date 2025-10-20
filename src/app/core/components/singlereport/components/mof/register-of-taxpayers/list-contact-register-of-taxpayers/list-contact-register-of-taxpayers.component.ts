import { Component, OnInit } from '@angular/core';
import { MofRegisterOfTaxpayersMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-mof-register-of-taxpayers/dxc-model-mof-register-of-taxpayers.interface';
import { IDxc_Model_Mof_register_Of_Taxpayers } from 'src/app/core/shared/models/Dxc_Model_Mof_register_Of_Taxpayers';

@Component({
  selector: 'app-list-contact-register-of-taxpayers',
  templateUrl: './list-contact-register-of-taxpayers.component.html',
  styleUrls: ['./list-contact-register-of-taxpayers.component.scss']
})
export class ListContactRegisterOfTaxpayersComponent implements OnInit {

  registerOfTaxpayersResults: IDxc_Model_Mof_register_Of_Taxpayers[];
  registerOfTaxpayersCount: number;
  report_name: string;
  constructor(private ReportMofRegisterOfTaxpayers: MofRegisterOfTaxpayersMetadata) { }

  ngOnInit() {
    this.ReportMofRegisterOfTaxpayers.getSearchDataContact();
    this.registerOfTaxpayersResults = this.ReportMofRegisterOfTaxpayers.$resultsContact;
    this.registerOfTaxpayersCount = this.ReportMofRegisterOfTaxpayers.$countContact;
    this.report_name = localStorage.getItem('report_name');
  }

}
