import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dxc-model-doc-good-conduct-allowance-withdrawals',
  templateUrl: './dxc-model-doc-good-conduct-allowance-withdrawals.component.html',
  styleUrls: ['./dxc-model-doc-good-conduct-allowance-withdrawals.component.css']
})
export class DxcModelDocGoodConductAllowanceWithdrawalsComponent implements OnInit {
  @Input() selectData:any;
  dataSourceName:any;
  dataModelName:any;
  id:any;
  constructor() { }

  ngOnInit() {
  }

}
