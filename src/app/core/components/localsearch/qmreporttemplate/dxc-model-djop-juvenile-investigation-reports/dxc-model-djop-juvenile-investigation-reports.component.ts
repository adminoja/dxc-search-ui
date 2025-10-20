import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dxc-model-djop-juvenile-investigation-reports',
  templateUrl: './dxc-model-djop-juvenile-investigation-reports.component.html',
  styleUrls: ['./dxc-model-djop-juvenile-investigation-reports.component.css']
})
export class DxcModelDjopJuvenileInvestigationReportsComponent implements OnInit {
  @Input() selectData:any;
  dataSourceName:any;
  dataModelName:any;
  id:any;
  sex:any;
  constructor() { }

  ngOnInit() {
  }

}
