import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dxc-model-sso-employer-detail',
  templateUrl: './dxc-model-sso-employer-detail.component.html',
  styleUrls: ['./dxc-model-sso-employer-detail.component.css']
})
export class DxcModelSsoEmployerDetailComponent implements OnInit {
  @Input() selectData:any;
  dataSourceName:any;
  dataModelName:any;
  id:any;
  constructor() { }

  ngOnInit() {
  }

}
