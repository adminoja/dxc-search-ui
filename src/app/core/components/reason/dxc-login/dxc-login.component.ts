import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dxc-login',
  templateUrl: './dxc-login.component.html',
  styleUrls: ['./dxc-login.component.scss']
})
export class DxcLoginComponent implements OnInit {


  constructor() { 
    
  }

  ngOnInit() {
    this.Modal()
  }

  Modal() {
    $('#exampleModalCenter').modal('show');

  }

}
