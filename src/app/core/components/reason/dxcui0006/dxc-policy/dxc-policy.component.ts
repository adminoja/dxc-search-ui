import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dxc-policy',
  templateUrl: './dxc-policy.component.html',
  styleUrls: ['./dxc-policy.component.scss']
})
export class DxcPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#full-width-modal').modal('show');
  }

}
