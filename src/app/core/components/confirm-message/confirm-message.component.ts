import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dxc_Model_SearchFillter } from '../../shared/models/Dxc_Model_SearchFillter';

declare var $;

@Component({
  selector: 'app-confirm-message',
  templateUrl: './confirm-message.component.html',
  styleUrls: ['./confirm-message.component.scss']
})
export class ConfirmMessageComponent implements OnInit {
  dataSearch: Dxc_Model_SearchFillter;
  citizen: string;
  data: any;
  uri: string;
  constructor(private routeparams: ActivatedRoute,) { 
    this.routeparams.params.subscribe(
      params => this.getCitizen(params['citizenCardNumber']));
    
    
  }
  ngOnInit() {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
    $('#right-modal').modal('toggle')
    // console.log(this.data);
    // this.data = JSON.parse(localStorage.getItem('searchData'));
    // console.log(this.data);
    // const res = `#/localsearch/${this.data.title}/${this.data.remark}/${this.data.img}/${this.data.departmentImg}/${this.data.departmentTitle}`
    // this.uri = encodeURI(res)
  }

  getCitizen(citizen: string) {
    this.citizen = citizen;
  }
  close() {
    $('#right-modal').modal('hide')
  }
  closetab() {
    window.close();
  }
  
}

