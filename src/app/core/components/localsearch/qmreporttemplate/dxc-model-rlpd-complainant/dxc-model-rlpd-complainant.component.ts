import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dxc-model-rlpd-complainant',
  templateUrl: './dxc-model-rlpd-complainant.component.html',
  styleUrls: ['./dxc-model-rlpd-complainant.component.css']
})
export class DxcModelRlpdComplainantComponent implements OnInit {
  @Input() selectData:any;
  dataSourceName:any;
  dataModelName:any;
  id:any;
  dataId:any;
  constructor() { }

  ngOnInit() {
  }

}
