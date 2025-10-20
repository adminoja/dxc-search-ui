import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dxc-model-doc-parole-withdrawals',
  templateUrl: './dxc-model-doc-parole-withdrawals.component.html',
  styleUrls: ['./dxc-model-doc-parole-withdrawals.component.css']
})
export class DxcModelDocParoleWithdrawalsComponent implements OnInit {
  @Input() selectData:any;
  dataSourceName:any;
  dataModelName:any;
  id:any;
  constructor() { }

  ngOnInit() {
  }

}
