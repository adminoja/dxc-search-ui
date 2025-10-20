import { Component, OnInit } from '@angular/core';
import { AgothChargeVictimMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-agoth-charge-victim/dxc-model-agoth-charge-victim.interface';
import { IDxc_Model_Agoth_ChargeVictim } from 'src/app/core/shared/models/Dxc_Model_Agoth_ChargeVictim';

@Component({
  selector: 'app-list-contact-agoth-charge-victim',
  templateUrl: './list-contact-agoth-charge-victim.component.html',
  styleUrls: ['./list-contact-agoth-charge-victim.component.scss']
})
export class ListContactAgothChargeVictimComponent implements OnInit {

  agothChargeVictimResults: IDxc_Model_Agoth_ChargeVictim[];
  agothChargeVictimCount: number;
  report_name: string;
  exitCode: any;
  
  constructor(private ReportAgothChargeVictim: AgothChargeVictimMetadata) { }

  ngOnInit() {
    this.ReportAgothChargeVictim.getSearchDataContact();
    this.agothChargeVictimResults = this.ReportAgothChargeVictim.$resultsContact;
    this.agothChargeVictimCount = this.ReportAgothChargeVictim.$countContact;
    this.exitCode = this.agothChargeVictimResults;
    this.report_name = localStorage.getItem('report_name');
  }

}
