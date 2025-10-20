import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dxc-model-rlpd-justice-fund',
  templateUrl: './dxc-model-rlpd-justice-fund.component.html',
  styleUrls: ['./dxc-model-rlpd-justice-fund.component.css']
})
export class DxcModelRlpdJusticeFundComponent implements OnInit {
  @Input() selectData:any;
  dataSourceName:any;
  dataModelName:any;
  id:any;
  constructor() { }

  ngOnInit() {
  }

}
